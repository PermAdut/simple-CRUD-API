import { IncomingMessage } from 'http';
import { IReqBody } from '../models/userModel.js';

export async function parseRequestBody(
  req: IncomingMessage,
): Promise<IReqBody | undefined> {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      try {
        const result = JSON.parse(body);
        if (onlyAllowedFields(result)) {
          resolve(result);
        } else {
          reject(new Error('Invalid fields in request body'));
        }
      } catch (err) {
        reject(new Error('Error parsing JSON: ' + err.message));
      }
    });

    req.on('error', () => {
      reject(new Error('Error reading request body'));
    });
  });
}

function onlyAllowedFields(obj: object): boolean {
  const objKeys = Object.keys(obj);
  const reqBodyKeys = Object.keys({ username: '', age: 10, hobbies: [] });
  if (objKeys.length !== reqBodyKeys.length) {
    return false;
  }
  for (const key of objKeys) {
    if (!reqBodyKeys.includes(key)) {
      return false;
    }
  }
  return true;
}
