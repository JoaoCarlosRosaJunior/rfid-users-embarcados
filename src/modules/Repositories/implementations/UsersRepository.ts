import { getRepository, Repository } from 'typeorm';
import { User } from '../../models/User';

import { IUserRepository, ICreateUserDTO } from '../IUsersRepository';

class UsersRepository implements IUserRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    id_tag,
    name,
    permission,
    github_link,
    active,
  }: ICreateUserDTO): Promise<void> {
    const userTag = this.repository.create({
      id_tag,
      name,
      permission,
      github_link,
      active,
    });

    await this.repository.save(userTag);
  }

  async list(): Promise<User[]> {
    const user = await this.repository.find();
    return user;
  }

  async findByName(name: string): Promise<User | any> {
    const user = await this.repository.findOne({ name });

    return user;
  }

  async findByID(id_tag: string): Promise<User | any> {
    const user = await this.repository.findOne({ id_tag });

    return user;
  }
}

export { UsersRepository };
