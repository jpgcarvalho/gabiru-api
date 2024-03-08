import { UserRepository } from "../../infrastructure/Repositories/User";
import { IUserRepository } from "../Interfaces/Repository/IUser";
import { IAuthService } from "../Interfaces/Services/IAuth";
import { GenerateToken } from "../Settings/Auth/GenerateToken";
import SignInUserType from "../Settings/Auth/SignInUserType";
import UserTokenType from "../Settings/Auth/UserTokenType";
import ComparePassword from "../Settings/Crypt/ComparePassword";

export class AuthService implements IAuthService {
  userRepository: IUserRepository;

  constructor() {
    this.userRepository = new UserRepository()
  }
  async login(signInUser: SignInUserType): Promise<string | null>{

    const user = await this.userRepository.getOneByEmail(signInUser.email);

    if(!user) return user;

    const result  = await ComparePassword(signInUser.password, user.password)

    if(!result) return null;

    const userToken : UserTokenType = {
      id: user.id,
      email: user.email,
      isActive: user.isActive
    }

    let token = GenerateToken(userToken);

    return token;
  }
  logout(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
