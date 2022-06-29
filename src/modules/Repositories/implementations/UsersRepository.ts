import { EntityRepository, getRepository, Repository } from 'typeorm';
import { User } from '../../models/User';

import { IUserRepository, ICreateUserDTO } from '../IUsersRepository';

@EntityRepository(User)
class UsersRepository extends Repository<User> implements IUserRepository {
  private repository: Repository<User>;

  async createUser({
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
    console.log('chegou aqui 5');
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
