import { connectDatabase } from "../database/database";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";
import { Certificate } from "../entity/Certificate";

export class CertificateDao {
  private certificateRepository: Repository<Certificate> | null = null;

  constructor() {
    connectDatabase()
      .then((connection) => {
        this.certificateRepository = connection.getRepository(Certificate);
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
      });
  }

  async getCertificate(): Promise<Certificate[]> {
    if (!this.certificateRepository) {
      throw new Error("Repository is not initialized");
    }

    try {
      const result = await this.certificateRepository.find();
      return result;
    } catch (error) {
      throw new Error(`Error from Dao GET User : ${error}`);
    }
  }
}
