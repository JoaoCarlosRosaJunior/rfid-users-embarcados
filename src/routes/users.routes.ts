import { Router } from 'express';
import { Request, Response } from 'express';
import { UsersRepository } from '../modules/Repositories/implementations/UsersRepository';
import { User } from '../modules/models/User';

const usersRoutes = Router();

usersRoutes.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const { id_tag, name, permission, github_link, active } = request.body;

    if (!id_tag || !name || !permission || !github_link || !active) {
      return response
        .status(400)
        .send({ message: 'Parâmetros do request inválidos.' });
    }

    const usersRepository = new UsersRepository();

    await usersRepository.create({
      id_tag,
      name,
      permission,
      github_link,
      active,
    });

    return response
      .status(200)
      .send({ message: `User ${name} save with sucess` });
  },
);

usersRoutes.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const { id_tag } = request.params;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findByID(id_tag);

    if (!user) {
      return response.status(400).send({ message: 'Id tag not found' });
    }

    return response.status(200).send({ userData: user });
  },
);

export { usersRoutes };
