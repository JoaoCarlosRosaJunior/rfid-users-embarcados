import { Router } from 'express';
import { Request, Response } from 'express';
import { UsersRepository } from '../modules/Repositories/implementations/UsersRepository';
import { User } from '../modules/models/User';
import { getCustomRepository } from 'typeorm';

const usersRoutes = Router();

usersRoutes.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    console.log('chegou aqui 1');
    const { id_tag, name, permission, github_link, active } = request.body;
    console.log('chegou aqui 2');
    if (!id_tag || !name || !permission || !github_link || !active) {
      return response
        .status(400)
        .send({ message: 'Parâmetros do request inválidos.' });
    }
    console.log('chegou aqui 3');
    const usersRepository = getCustomRepository(UsersRepository);

    await usersRepository.createUser({
      id_tag,
      name,
      permission,
      github_link,
      active,
    });
    console.log('chegou aqi 6');
    return response
      .status(200)
      .send({ message: `User ${name} save with sucess` });
  },
);

usersRoutes.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const { id_tag } = request.params;

    const usersRepository = getCustomRepository(UsersRepository);

    const user = await usersRepository.findByID(id_tag);

    if (!user) {
      return response.status(400).send({ message: 'Id tag not found' });
    }

    return response.status(200).send({ userData: user });
  },
);

export { usersRoutes };
