import { AssessmentDao } from "../daos/assessment.dao";
import { Assessment } from "../entity/Assessment";
export class AssessmentService {
  private assessmentDao = new AssessmentDao();

  async getAssessment(): Promise<Assessment[]> {
    return await this.assessmentDao.getAssessment();
  }

}
