import jwt from "jsonwebtoken";

import  {JWT_SECRET} from "@repo/backend-comon/config";

import { Request,Response,NextFunction } from "express";

export function middleware(req:Request,res:Response,next:NextFunction){

    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token ,JWT_SECRET);

    if(decoded){
        req.userId = decoded.userId;
        next();
    }else{
        res.status(403).json({
            message:"Invalid Creds"
        })
    }
}

