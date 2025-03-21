import { connectDatabase } from "../database/database";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";
import { User_Activity } from "../entity/User_Activity";

export class UserActivityDao {
  private userActivityRepository: Repository<User_Activity> | null = null;

  constructor() {
    connectDatabase()
      .then((connection) => {
        this.userActivityRepository = connection.getRepository(User_Activity);
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
      });
  }


  async getUserActivity(): Promise<User_Activity[]> {
    if (!this.userActivityRepository) {
      throw new Error("Repository is not initialized");
    }

    try {
      const result = await this.userActivityRepository.find();
      return result;
    } catch (error) {
      throw new Error(`Error from Dao GET User : ${error}`);
    }
  }
}
