import { Request, Response, NextFunction } from "express";
import { UsersRepositories } from "../src/repository/UserReposity";
import { getCustomRepository } from "typeorm";



 export async function ensureAdmin(request: Request, response: Response, next: NextFunction){
    const { user_id } =  request;
    const usersRepositories = getCustomRepository(UsersRepositories);
    const { admin } = await usersRepositories.findOne(user_id);

    if(admin){
        return next();
    }
    return response.status(403).sendFile(__dirname + "/index.html");
 }