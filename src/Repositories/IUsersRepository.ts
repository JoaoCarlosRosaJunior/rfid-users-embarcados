import { User } from '../models/User';

// New concept: DTO => Data to Transfer. É quando recebemos dados de request e transformamos em objeto para conversar com outros repositorios
interface ICreateUserDTO {
  id_tag: string;
  name: string;
  permission: string;
  github_link: string;
  active: boolean;
}

interface IUserRepository {
  findByName(name: String): Promise<User | any>;
  list(): Promise<User[]>;
  createUser({
    id_tag,
    name,
    permission,
    github_link,
    active,
  }: ICreateUserDTO): Promise<void>;
  findByID(id_tag: string): Promise<User | any>;
}

export { IUserRepository, ICreateUserDTO };
