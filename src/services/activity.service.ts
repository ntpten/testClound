import { ActivityDao } from "../daos/activity.dao";
import { Activity } from "../entity/Activity";
export class ActivityService {
  private activityDao = new ActivityDao();

  async getActivity(): Promise<Activity[]> {
    return await this.activityDao.getActivity();
  }

}
