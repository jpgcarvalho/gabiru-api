
import SignInUserType from "../../Settings/Auth/SignInUserType";

export interface IAuthService {
    login(authUser: SignInUserType): Promise<string | null> | null;
    logout(): Promise<boolean>;
  }
  