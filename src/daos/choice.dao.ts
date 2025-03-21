import { connectDatabase } from "../database/database";
import { Repository } from "typeorm";
import bcrypt from "bcrypt";
import { Choice } from "../entity/Choice";

export class ChoiceDao {
  private choiceRepository: Repository<Choice> | null = null;

  constructor() {
    connectDatabase()
      .then((connection) => {
        this.choiceRepository = connection.getRepository(Choice);
      })
      .catch((error) => {
        console.error("Database connection failed:", error);
      });
  }


  async getChoice(): Promise<Choice[]> {
    if (!this.choiceRepository) {
      throw new Error("Repository is not initialized");
    }

    try {
      const result = await this.choiceRepository.find();
      return result;
    } catch (error) {
      throw new Error(`Error from Dao GET User : ${error}`);
    }
  }
}
