import { IUser, IReqBody } from '../models/userModel.js';
import { v4 } from 'uuid';

const allUsers: IUser[] = [];

export async function createUserData(userData: IReqBody): Promise<IUser> {
  allUsers.push({ id: v4(), ...userData });
  return { id: v4(), ...userData };
}

export async function getAllUsersData(): Promise<IUser[]> {
  return allUsers;
}

export async function getUserById(id: string): Promise<IUser | undefined> {
  return allUsers.find((el: IUser) => el.id == id);
}

export async function deleteUser(id: string): Promise<boolean> {
  const index = allUsers.findIndex((el) => el.id === id);
  if (index === -1) {
    return false;
  } else {
    allUsers.splice(index, 1);
    return true;
  }
}

export async function updateUserData(
  id: string,
  userInfo: IReqBody,
): Promise<IUser | undefined> {
  const index = allUsers.findIndex((el) => el.id === id);
  if (index === -1) {
    return undefined;
  } else {
    allUsers[index] = {
      id: id,
      ...userInfo,
    };
    console.log(index);
    console.log(allUsers[index]);
    return allUsers[index];
  }
}
