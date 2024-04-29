import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repository/UserReposity";
import { hash } from "bcryptjs";
import { classToPlain } from "class-transformer";

interface IUserRequest {
    email: string;
    id: string;
}

class CreateUserService {
    async execute({ id }: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        await usersRepository.findOne({
            id,
        });

        await usersRepository.createQueryBuilder().delete().from("users").where("id = :id", { id}).execute();

        return ({ message: "User deleted" });
    }
}

export { CreateUserService }