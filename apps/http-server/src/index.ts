//import { JWT_SECRET } from "@repo/backend-comon/config";
import { Request,Response } from "express";

import { JWT_SECRET } from "@repo/backend-comon/config";

import {CreateUserSchema,SigninSchema,CreateRoomSchema} from "@repo/common/types"

import jwt from "jsonwebtoken";

import { middleware } from "./middleware";

import {prismaClient} from "@repo/db/client"

const express  = require("express");

const app = express();

app.post("/signin",function(req:Request,res:Response){
    const data = SigninSchema.safeParse(req.body);

     if(!data.success){
        res.json({
            message:"Incorrect Creds"
        })
        return;
    }

})

app.post("/signup",function(req:Request,res:Response){
    //call to db to create the things
    const data = CreateUserSchema.safeParse(req.body);

    if(!data.success){
        res.json({
            message:"Incorrect Creds"
        })
        return; 
    }

    const userId = 1

    const token = jwt.sign({
        userId
    },JWT_SECRET)
    
    res.json({
        token,
        messge:"User Account Created Successfully"
    })

})

app.post("/room",middleware,function(req:Request,res:Response){
    const data = CreateRoomSchema.safeParse(req.body);

    if(!data.success){
        res.json({
            message:"Incorrect Creds"
        })
        return;
    }

    res.json({
        roomId:123
    })

})

app.listen(3001,()=>{
    console.log("Server is running on the port 3001");
})