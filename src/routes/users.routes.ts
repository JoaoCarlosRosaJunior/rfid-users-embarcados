import { Router } from "express";

import { UsersRepository } from "../modules/Repositories/implementations/UsersRepository";
import { CreateUserController } from "../modules/useCases/createCategory/CreateUserController";
import { GetUserController } from "../modules/useCases/getUser/GetUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
usersRoutes.post("/", createUserController.handle);

const getUserController = new GetUserController();
usersRoutes.get("/", getUserController.handle);

export { usersRoutes };
