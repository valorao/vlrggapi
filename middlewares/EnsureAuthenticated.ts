import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken"

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken =  request.headers.authorization;
    const officalauthtoken = "988be63f550f1152dc956e60f6af586d";
      if (!authToken){
          return response.status(403).sendFile(__dirname + "/index.html");
      }
      const [,token] = authToken.split(" ");
        try {
        const { sub } = verify(token, officalauthtoken) as IPayload;

        request.user_id = sub;
        
        }catch(err){
          return response.status(403).sendFile(__dirname + "/index.html");
        }

      return next();
}