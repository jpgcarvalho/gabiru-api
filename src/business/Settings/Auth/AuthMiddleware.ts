import { Request as ExpressRequest, Response, NextFunction } from 'express';
import jwt from "jsonwebtoken";
import UserTokenType from './UserTokenType';


interface Request extends ExpressRequest {
    user?: UserTokenType;
}

const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers.authorization;

    if (authHeader == null) return res.sendStatus(401);

    const token = authHeader.split(' ')[0];

    jwt.verify(token, process.env.SECRET as string, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user as UserTokenType;
        next(); 
    });
};

export default authenticateToken;
