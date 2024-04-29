import { Request, Response} from "express"
import { CreateUserService } from "../src/service/CreateUserService";
import "express-async-errors";

class CreateUserController {
    async handle(request: Request, response: Response) {
        try{
            const { name, email, admin, password } = request.body;

            const createUserService = new CreateUserService();

            const user = await createUserService.execute({ name, email, admin, password});

            return response.json(user).status(201);
        }catch (err) {
            return response.json({ error: err.message }).status(400);
        }
    }
}

export { CreateUserController }