import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repository/UserReposity";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface IAuthenticateRequest {
    email: string;
    password: string;
}
class AuthenticateUserService {
    async execute({email, password}){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const user =  await usersRepositories.findOne({
            email,
        });

        if(!user) {
            throw new Error("Email or Password is incorrect");
        }

        const passwordMatch = await compare(password, user.password);

        if(!passwordMatch) {
            throw new Error("Email or Password is incorrect");
        }

        const officalauthtoken = "988be63f550f1152dc956e60f6af586d";
        const token = sign({
            name: user.name,
            email: user.email
        }, officalauthtoken, {
            subject: user.id,
            expiresIn: "7d"
        } )
    
        return token;
    }
}

export { AuthenticateUserService }