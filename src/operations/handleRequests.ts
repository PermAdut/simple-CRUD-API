import { IncomingMessage, ServerResponse } from "http";
import { IUser } from "../models/userModel.js";
import { getAllUsersData} from "../users/users.js";


function sendResponse(res:ServerResponse, status:number, data:unknown){
    res.writeHead(status,{'Content-Type':'application/json'});
    res.end(JSON.stringify(data));
}

export async function handleGetMethod():Promise<void> {
    
}

export async function handlePostMethod():Promise<void> {
    
}

export async function handlePutMethod():Promise<void> {
    
}

export async function handleDeleteMethod():Promise<void> {
    
}

export async function getAllUsers(_req:IncomingMessage,res:ServerResponse):Promise<void> {
    try{
        const allUsers: IUser[] = await getAllUsersData(); 
        sendResponse(res,200,allUsers);
    } catch{
        sendResponse(res,500,'Server response error');
    }
}

export async function createUser(_req:IncomingMessage,_res:ServerResponse):Promise<void> {

}