import { Request, Response } from "express";
import { GetUserUseCase } from "./GetUserUseCase";
import { container } from "tsyringe";

class GetUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_tag } = request.params;

    const getUserUseCase = container.resolve(GetUserUseCase);

    try {
      const user = await getUserUseCase.execute({ id_tag });
      return response.status(201).send({ userData: user });
    } catch (error) {
      return response.status(400).send({ message: error.message });
    }
  }
}

export { GetUserController };
