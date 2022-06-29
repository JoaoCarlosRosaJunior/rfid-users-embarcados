import { Request, Response } from 'express';
import { CreateUserUseCase } from './CreateUserUseCase';
import { container } from 'tsyringe';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_tag, name, permission, github_link, active } = request.body;

    if (!id_tag || !name || !permission || !github_link || !active) {
      return response
        .status(400)
        .send({ message: 'Parâmetros do request inválidos.' });
    }

    const createUserUseCase = container.resolve(CreateUserUseCase);

    try {
      await createUserUseCase.execute({
        id_tag,
        name,
        permission,
        github_link,
        active,
      });
    } catch (error) {
      return response.status(400).send({ message: error.message });
    }

    return response
      .status(201)
      .send({ message: `User ${name} save with sucess!` });
  }
}

export { CreateUserController };
