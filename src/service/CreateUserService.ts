import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repository/UserReposity";
import { hash } from "bcryptjs";
import { classToPlain } from "class-transformer";
import { response, request } from "express";
const res = response
const req = request

interface IUserRequest {
    name: string;
    email: string;
    admin: boolean;
    password: string;
}

class CreateUserService {
    async execute({ name, email, admin = false, password}: IUserRequest) {
        const usersRepository = getCustomRepository(UsersRepositories);

        if(!email) {
            return res.status(412);
        }

        const UserAlreadyExists = await usersRepository.findOne({
            email,
        });

        if(UserAlreadyExists) {
            return res.status(409);
        }

        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash,
        });

        await usersRepository.save(user);

        return [res.status(201), classToPlain(user)];
    } 

}

export { CreateUserService }