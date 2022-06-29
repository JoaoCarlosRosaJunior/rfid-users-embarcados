import { UsersRepository } from '../../Repositories/implementations/UsersRepository';
import { IUserRepository } from '../../Repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';
import { User } from '../../entities/User';

@injectable()
class GetUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUserRepository,
  ) {}

  async execute(id_tag: string): Promise<User> {
    const user = await this.usersRepository.findByID(id_tag);

    if (!user) {
      throw new Error('Id tag not found');
    }

    return user;
  }
}

export { GetUserUseCase };
