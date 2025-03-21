import { QuestionDao } from "../daos/question.dao";
import { Question } from "../entity/Question";
export class QuestionService {
  private questionDao = new QuestionDao();

  async getQuestion(): Promise<Question[]> {
    return await this.questionDao.getQuestion();
  }

}
