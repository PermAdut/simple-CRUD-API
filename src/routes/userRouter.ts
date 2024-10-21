import { IncomingMessage, ServerResponse } from 'http';
import { HHTPmethod } from '../types.js';
import {
    getAllUsers,
    createUser,
  handleDeleteMethod,
  handleGetMethod,
  handlePostMethod,
  handlePutMethod,
} from '../operations/handleRequests.js';

export async function handleUserRouter(
  req: IncomingMessage,
  res: ServerResponse,
  path: string,
): Promise<boolean> {
  const { method } = req;
  if(path == "api/users"){
    if(method == HHTPmethod.GET){
        await getAllUsers(req,res);
    }
    if(method == HHTPmethod.POST){
        await createUser(req,res)
    }
  }


  switch (method) {
    case HHTPmethod.GET:
      await handleGetMethod();
      return true;
    case HHTPmethod.DELETE:
      await handleDeleteMethod();
      return true;
    case HHTPmethod.POST:
      await handlePostMethod();
      return true;
    case HHTPmethod.PUT:
      await handlePutMethod();
      return true;
  }

  return false;
}
