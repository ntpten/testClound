import { Users } from "../entity/User";
import { connectDatabase } from "../database/database";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";

export class UserDao {
    private userRepository: Repository<Users> | null = null;

    constructor() {
        connectDatabase()
            .then((connection) => {
                this.userRepository = connection.getRepository(Users);
            })
            .catch((error) => {
                console.error("Database connection failed:", error);
            });
    }

    async getUsers(): Promise<Users[]> {
        if (!this.userRepository) {
            throw new Error("Repository is not initialized");
        }

        try {
            const result = await this.userRepository.find();
            return result;
        } catch (error) {
            throw new Error(`Error from Dao GET User : ${error}`);
        }
    }

    async registerUsers(email: string, password: string): Promise<Users> {
        if (!this.userRepository) {
            throw new Error("Repository is not initialized");
        }

        try {
            // ตรวจสอบว่า email มีในระบบหรือไม่
            const checkEmail = await this.userRepository.findOne({ where: { email } });

            if (checkEmail) {
                throw new Error("This user already exists");
            } else {
                // Hash password ก่อนบันทึก
                const saltRounds = 10;
                const hashedPassword = await bcrypt.hash(password, saltRounds);

                // ใช้ TypeORM insert แทนการใช้ query โดยตรง
                const newUser = this.userRepository.create({ email, password: hashedPassword });
                await this.userRepository.save(newUser);  // บันทึกผู้ใช้ใหม่

                return newUser;  // ส่งคืนผู้ใช้ที่ถูกบันทึก
            }
        } catch (error) {
            throw new Error(`Error from Dao Register User: ${error}`);
        }
    }


}
