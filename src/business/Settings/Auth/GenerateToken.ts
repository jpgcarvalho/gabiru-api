import jwt from "jsonwebtoken";
import UserTokenType from "./UserTokenType";


export function GenerateToken(userToken: UserTokenType): string {
    var token = jwt.sign({ id: userToken.id, email: userToken.email }, process.env.SECRET!, {
        expiresIn: 3000 
      });
      return token;
}