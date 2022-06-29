import { Router } from 'express';
import { Request, Response } from 'express';
import { UsersRepository } from '../Repositories/implementations/UsersRepository';
import { User } from '../models/User';
import { getCustomRepository, getRepository } from 'typeorm';

const usersRoutes = Router();

usersRoutes.post(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    console.log('chegou aqui 1');
    const { id_tag, name, permission, github_link, active } = request.body;
    console.log('chegou aqui 2');
    if (!id_tag || !name || !permission || !github_link) {
      return response
        .status(400)
        .send({ message: 'Parâmetros do request inválidos.' });
    }
    console.log('chegou aqui 3');
    const usersRepository = getRepository(User);
    console.log(4);
    const user = await usersRepository.create({
      id_tag,
      name,
      permission,
      github_link,
      active,
    });

    await usersRepository.save(user);
    console.log('chegou aqi 6');
    return response
      .status(200)
      .send({ message: `User ${name} save with sucess` });
  },
);

usersRoutes.get(
  '/',
  async (request: Request, response: Response): Promise<Response> => {
    const { id_tag } = request.body;

    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({ id_tag });

    if (!user) {
      return response.status(400).send({ message: 'Id tag not found' });
    }

    return response.status(200).send({ userData: user });
  },
);

usersRoutes.patch(
  '/update/active',
  async (request: Request, response: Response): Promise<Response> => {
    const { active, id_tag } = request.body;

    const usersRepository = getRepository(User);

    try {
      const updatedUser = await usersRepository
        .createQueryBuilder()
        .update({
          active,
        })
        .where({
          id_tag,
        })
        .returning('*')
        .execute();
      return response.status(200).send({ update: updatedUser.raw });
    } catch (error) {
      return response.status(400).send(error);
    }
  },
);

usersRoutes.get(
  '/active',
  async (request: Request, response: Response): Promise<Response> => {
    const usersRepository = getRepository(User);

    const activeTags = await usersRepository.find({ active: true });

    return response.status(200).send({ activeTags: activeTags });
  },
);

export { usersRoutes };
