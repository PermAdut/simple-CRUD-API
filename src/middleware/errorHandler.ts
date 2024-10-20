import { ServerResponse } from 'http';
import { throwErrorResponse } from 'src/utils/errorResponse.js';

export const serverErrorHandler = (
  res: ServerResponse,
  status: number = 500,
  message: string = 'Server response error',
): void => {
  const response = throwErrorResponse(status, message);
  res.writeHead(status, { 'content-type': 'application/json' });
  res.end(JSON.stringify(response));
};

export const notFoundErrorhander = (
  res: ServerResponse,
  status: number = 404,
  message: string = 'Not found',
): void => {
    const response = throwErrorResponse(status, message);
    res.writeHead(status, {'content-type': 'application/json'});
    res.end(JSON.stringify(response))
};
