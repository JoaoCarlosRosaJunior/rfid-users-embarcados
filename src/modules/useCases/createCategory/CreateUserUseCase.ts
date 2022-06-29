import { UsersRepository } from '../../Repositories/implementations/UsersRepository';
import { IUserRepository } from '../../Repositories/IUsersRepository';
import { inject, injectable } from 'tsyringe';

interface IRequest {
  id_tag: string;
  name: string;
  permission: string;
  github_link: string;
  active: boolean;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject(UsersRepository)
    private usersRepository: IUserRepository,
  ) {}

  async execute({
    id_tag,
    name,
    permission,
    github_link,
    active,
  }: IRequest): Promise<void> {
    const userAlreadyExist = await this.usersRepository.findByName(name);

    if (userAlreadyExist) {
      throw new Error('User already exists'); //Não podemos deixar a responsabilidade de lançar a response com o Serviço, por isso lançamos o erro
    }

    this.usersRepository.create({
      id_tag,
      name,
      permission,
      github_link,
      active,
    });
  }
}

export { CreateUserUseCase };
