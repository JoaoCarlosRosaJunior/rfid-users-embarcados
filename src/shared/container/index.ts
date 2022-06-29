import { container } from "tsyringe";

import { IUserRepository } from "../../modules/Repositories/IUsersRepository";
import { UsersRepository } from "../../modules/Repositories/implementations/UsersRepository";

container.registerSingleton<IUserRepository>(
  "UsersRepository",
  UsersRepository
);
