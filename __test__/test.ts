import { server } from '../src/main';
import supertest from 'supertest';
import { IReqBody } from '../src/models/userModel';

const request = supertest(server);

const mockUser: IReqBody = {
  username: 'Jordan',
  age: 54,
  hobbies: ['no hobbies'],
};

const mockBody: IReqBody = {
  username: 'Valeriy',
  age: 27,
  hobbies: ['nodejs', 'js', 'winapi'],
};

const checkUser = (recieved: unknown, exp: IReqBody): void => {
  expect(recieved).toMatchObject({
    username: exp.username,
    age: exp.age,
    hobbies: exp.hobbies,
  });
};

describe('Users', (): void => {
  beforeAll((): void => {
    const PORT: string = process.env.PORT || '4001';
    server.close();
    server.listen(PORT);
  });

  afterAll(async (): Promise<void> => {
    await new Promise((resolve): void => {
      server.close(resolve);
    });
  });

  let createdUserId: string;
  describe('Get /api/users', (): void => {
    test('empty array', async () => {
      const { status, body } = await request.get('/api/users');
      expect(status).toBe(200);
      expect(body).toEqual([]);
    });
  });

  describe('Post /api/users', () => {
    test('create and return a new user containing expected records', async (): Promise<void> => {
      const { status, body } = await request
        .post('/api/users')
        .send(mockUser)
        .set('Content-Type', 'application/json');

      createdUserId = body.id;
      expect(status).toBe(201);
      expect(body).toHaveProperty('id');
      checkUser(body, mockUser);
    });
    test('should return 400 ""Request body does not contain required fields"', async (): Promise<void> => {
      const incompleteUser = { username: 'Random' };
      const { status, body } = await request
        .post('/api/users')
        .send(incompleteUser)
        .set('Content-Type', 'application/json');

      expect(status).toBe(400);
      expect(body).toHaveProperty(
        'message',
        'Request body does not contain required fields',
      );
    });
  });

  describe('GET /api/users/id', (): void => {
    test('should return created user', async (): Promise<void> => {
      const { status, body } = await request.get(`/api/users/${createdUserId}`);

      expect(status).toBe(200);
      expect(body).toHaveProperty('id', createdUserId);
      checkUser(body, mockUser);
    });
  });

  describe('PUT /api/users/:id', (): void => {
    test('should update and return created user by ID', async (): Promise<void> => {
      const { status, body } = await request
        .put(`/api/users/${createdUserId}`)
        .send(mockBody)
        .set('content-type', 'application/json');

      expect(status).toBe(200);
      expect(body).toHaveProperty('id', createdUserId);
      checkUser(body, mockBody);
    });
  });

  describe('DELETE /api/users/:id', (): void => {
    test('should delete created user', async (): Promise<void> => {
      const { status } = await request.delete(`/api/users/${createdUserId}`);

      expect(status).toBe(204);
    });
  });

  describe('GET /api/users/:id (non-existent user)', (): void => {
    test('should return 404 "User does not exist"', async (): Promise<void> => {
      const { status, body } = await request.get(`/api/users/${createdUserId}`);

      expect(status).toBe(404);
      expect(body).toHaveProperty('message', 'User does not exist');
    });
  });

  describe('GET /api/users/nonExistedRoute/123 (non-existent route)', (): void => {
    test('should return 404 "Not Found"', async (): Promise<void> => {
      const { status, body } = await request.get(
        '/api/users/nonExistedRoute/123',
      );

      expect(status).toBe(404);
      expect(body).toHaveProperty('message', 'Not found');
    });
  });
});
