import { IncomingMessage, ServerResponse } from 'http';
import { IReqBody, IUser } from '../models/userModel.js';
import {
  createUserData,
  deleteUser,
  getAllUsersData,
  getUserById as getUser,
  updateUserData,
} from '../users/users.js';
import { parseRequestBody } from '../middleware/parsingBody.js';
import { validate } from 'uuid';

function sendResponse(res: ServerResponse, status: number, data: unknown) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(data));
}

export async function getAllUsers(
  _req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  try {
    const users: IUser[] = await getAllUsersData();
    sendResponse(res, 200, users);
  } catch {
    sendResponse(res, 500, 'Server response error');
  }
}

export async function createUser(
  req: IncomingMessage,
  res: ServerResponse,
): Promise<void> {
  try {
    const newUser: IReqBody | undefined = await parseRequestBody(req);
    if (newUser) {
      const user = await createUserData(newUser);
      sendResponse(res, 201, user);
    } else {
      sendResponse(res, 400, 'Request body does not contain required fields');
    }
  } catch {
    sendResponse(res, 400, 'Request body does not contain required fields');
  }
}

export async function getUserById(
  req: IncomingMessage,
  res: ServerResponse,
  id: string,
) {
  try {
    if (validate(id)) {
      const user: IUser | undefined = await getUser(id);
      if (user) {
        sendResponse(res, 200, user);
      } else {
        sendResponse(res, 404, 'User does not exist');
      }
    } else {
      sendResponse(res, 400, 'Invalid id');
      return;
    }
  } catch {
    sendResponse(res, 500, 'Server response error');
  }
}

export async function deleteUserById(
  req: IncomingMessage,
  res: ServerResponse,
  id: string,
) {
  try {
    if (validate(id)) {
      const user: boolean = await deleteUser(id);
      if (user) {
        sendResponse(res, 204, user);
      } else {
        sendResponse(res, 404, 'User does not exist');
      }
    } else {
      sendResponse(res, 400, 'Invalid id');
      return;
    }
  } catch {
    sendResponse(res, 500, 'Server response error');
  }
}

export async function updateUserById(
  req: IncomingMessage,
  res: ServerResponse,
  id: string,
) {
  try {
    if (validate(id)) {
      const body = await parseRequestBody(req);
      if (body) {
        const user: IUser | undefined = await updateUserData(id, body);
        if (user) {
          sendResponse(res, 200, user);
        } else {
          sendResponse(res, 404, 'User does not exist');
        }
      }
    } else {
      sendResponse(res, 400, 'Invalid id');
      return;
    }
  } catch {
    sendResponse(res, 400, 'Request body does not contain required fields');
  }
}
