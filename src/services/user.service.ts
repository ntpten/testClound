import { UserDao } from "../daos/user.dao";
import { Users } from "../entity/User";
export class UserService {
    private userDao = new UserDao()

    async getUsers(): Promise<Users[]> {
        return await this.userDao.getUsers();
    }
}