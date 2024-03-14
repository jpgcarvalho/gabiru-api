import { ClientRepository } from "../../infrastructure/Repositories/Client";
import { PersonalRepository } from "../../infrastructure/Repositories/Personal";
import { IClientRepository } from "../Interfaces/Repository/IClient";
import { IPersonalRepository } from "../Interfaces/Repository/IPersonal";
import { IAuthService } from "../Interfaces/Services/IAuth";
import { GenerateToken } from "../Settings/Auth/GenerateToken";
import SignInUserType from "../Settings/Auth/SignInUserType";
import UserTokenType from "../Settings/Auth/UserTokenType";
import ComparePassword from "../Settings/Crypt/ComparePassword";

export class AuthService implements IAuthService {
  personalRepository: IPersonalRepository;

  constructor() {
    this.personalRepository = new PersonalRepository()
  }
  async login(signInUser: SignInUserType): Promise<string | null>{

    const user = await this.personalRepository.getOneByEmail(signInUser.email);

    if(!user) return user;

    const result  = await ComparePassword(signInUser.password, user.password!)

    if(!result) return null;

    const userToken : UserTokenType = {
      id: user.id,
      email: user.email,
    }

    let token = GenerateToken(userToken);

    return token;
  }
  
  logout(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
