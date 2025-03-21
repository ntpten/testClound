import { ChoiceDao } from "../daos/choice.dao";
import { Choice } from "../entity/Choice";
export class ChoiceService {
  private choiceDao = new ChoiceDao();

  async getChoice(): Promise<Choice[]> {
    return await this.choiceDao.getChoice();
  }

}
