import { IncomingMessage, ServerResponse } from 'http';
import { HHTPmethod } from '../types.js';
import {
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
        
    }
    
  }


  switch (method) {
    case HHTPmethod.GET:
      handleGetMethod();
      return true;
    case HHTPmethod.DELETE:
      handleDeleteMethod();
      return true;
    case HHTPmethod.POST:
      handlePostMethod();
      return true;
    case HHTPmethod.PUT:
      handlePutMethod();
      return true;
  }

  return false;
}
