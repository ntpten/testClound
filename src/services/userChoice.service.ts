import { UserChoiceDao } from "../daos/userChoice.dao";
import { UserChoice } from "../entity/UserChoice";
export class UserChoiceService {
  private userChoiceDao = new UserChoiceDao();

  async getUserChoice(): Promise<UserChoice[]> {
    return await this.userChoiceDao.getUserChoice();
  }

}
