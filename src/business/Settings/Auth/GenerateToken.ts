import jwt from "jsonwebtoken";
import UserTokenType from "./UserTokenType";


export function GenerateToken(userToken: UserTokenType): string {
    var token = jwt.sign({ email: userToken.email, isActive: userToken.isActive }, process.env.SECRET!, {
        expiresIn: 3000 
      });
      return token;
}