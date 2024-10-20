import { config } from "dotenv";
config();
import { createServer } from "http";
import { handleUserRouter } from "./routes/userRouter.js";

const PORT:string = process.env.PORT || '4000';

const server = createServer(async(req,res):Promise<void> => {
    try{
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Origin', '*');

        const protocol = req.headers['x-forwarded-proto'] || "http";
        const url = new URL(req.url || '', `${protocol}://${req.headers.host}`);
        const path: string = url.pathname.replace(/\/$/, '');
        const isHandled:boolean = await handleUserRouter(req,res,path);
        if(!isHandled){

        }
    } catch{

    }
})

server.listen(PORT, () => {
    console.log(`Server is running on PORT ${PORT}`);
})

