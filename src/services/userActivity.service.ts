import { UserActivityDao } from "../daos/UserActivity.dao";
import { User_Activity } from "../entity/User_Activity";
export class UserActivityService {
  private userActivityDao = new UserActivityDao();

  async getUserActivity(): Promise<User_Activity[]> {
    return await this.userActivityDao.getUserActivity();
  }

}
