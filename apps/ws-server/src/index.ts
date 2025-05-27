import { WebSocketServer } from 'ws';

import jwt from "jsonwebtoken";

import {JWT_SECRET} from "@repo/backend-comon/config"

const wss = new WebSocketServer({ port: 8080 }); // this creates a websocket at 8080 port

wss.on('connection', function connection(ws,request) { // here using on method we are establishing a connection to teh above server
  
  const url = request.url
  
  if(!url){
    return;
  }
  
  const queryParams = new URLSearchParams(url.split("?")[1]);

  const token = queryParams.get("token") || "";

  const decoded = jwt.verify(token,JWT_SECRET)
  
  if(typeof decoded == "string"){
    ws.close();
    return;
  }
  
  if(!decoded || !decoded.userId){
    ws.close();
    return;
  }

  
  ws.on('message', function message(data) {
    ws.send("pong");
  });
});
// everytime user makes a connect i will use the middle to autheticate the using jwt token