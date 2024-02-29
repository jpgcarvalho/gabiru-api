import { Request, Response } from "express";
import { AuthService } from "../../business/Services/Auth";
import { IAuthService } from "../../business/Interfaces/Services/IAuth";
import SignInUserType from "../../business/Settings/Auth/SignInUserType";

export class AuthController {

  private authService: IAuthService;

  constructor() {
    this.authService = new AuthService();
  }

  public async login(req: Request<unknown, unknown, SignInUserType, unknown>, res: Response) {

    const accessToken = await this.authService.login(req.body);
  
    return res.status(200).json({accessToken});
  }

  public async logout(req: Request<unknown, unknown, unknown, unknown>, res: Response) {

    const result = await this.authService.logout();

    return res.status(200).json(result);
  }
}
