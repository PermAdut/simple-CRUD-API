import { IncomingMessage, ServerResponse } from 'http';
import { HHTPmethod } from '../types.js';
import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from '../operations/handleRequests.js';
import { notFoundErrorHandler } from '../middleware/errorHandler.js';

function findOccurances(str: string): number {
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '/') {
      result++;
    }
  }
  return result;
}

export async function handleUserRouter(
  req: IncomingMessage,
  res: ServerResponse,
  path: string,
): Promise<boolean> {
  const method = req.method;
  if (!path.startsWith('/api/users')) {
    await notFoundErrorHandler(res);
    return true;
  }
  if (findOccurances(path) != 2 && findOccurances(path) != 3) {
    await notFoundErrorHandler(res);
    return true;
  }
  if (path == '/api/users') {
    if (method == HHTPmethod.GET) {
      await getAllUsers(req, res);
      return true;
    }
    if (method == HHTPmethod.POST) {
      await createUser(req, res);
      return true;
    }
  }

  const LastSlashId = path.lastIndexOf('/');
  const userId = path.substring(LastSlashId + 1);

  switch (method) {
    case HHTPmethod.GET:
      await getUserById(req, res, userId);
      return true;
    case HHTPmethod.DELETE:
      await deleteUserById(req, res, userId);
      return true;
    case HHTPmethod.PUT:
      await updateUserById(req, res, userId);
      return true;
  }

  return false;
}
