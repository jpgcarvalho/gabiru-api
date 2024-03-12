import { ClientRepository } from "../../infrastructure/Repositories/Client";
import { IClientRepository } from "../Interfaces/Repository/IClient";
import { IAuthService } from "../Interfaces/Services/IAuth";
import { GenerateToken } from "../Settings/Auth/GenerateToken";
import SignInUserType from "../Settings/Auth/SignInUserType";
import UserTokenType from "../Settings/Auth/UserTokenType";
import ComparePassword from "../Settings/Crypt/ComparePassword";

export class AuthService implements IAuthService {
  clientRepository: IClientRepository;

  constructor() {
    this.clientRepository = new ClientRepository()
  }
  async login(signInClient: SignInUserType): Promise<string | null>{

    const client = await this.clientRepository.getOneByEmail(signInClient.email);

    if(!client) return client;

    const result  = await ComparePassword(signInClient.password, client.password!)

    if(!result) return null;

    const clientToken : UserTokenType = {
      id: client.id,
      email: client.email,
      isActive: client.isActive
    }

    let token = GenerateToken(clientToken);

    return token;
  }
  logout(): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

}
