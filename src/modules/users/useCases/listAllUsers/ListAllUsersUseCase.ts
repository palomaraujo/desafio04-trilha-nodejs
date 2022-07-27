import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}
class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const callUser = this.usersRepository.findById(user_id);
    if (!callUser) {
      throw new Error("User not found");
    }
    if (callUser.admin === false) {
      throw new Error("User caller is not an admin user");
    }
    const users = this.usersRepository.list();
    return users;
  }
}

export { ListAllUsersUseCase };
