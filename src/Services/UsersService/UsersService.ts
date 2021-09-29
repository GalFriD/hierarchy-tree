import { NetworkService } from '../NetworkService';
import { UserResponse } from '../NetworkService/types';
import { User } from '../../Models/User';

function createUserFromResponse(user: UserResponse): User {
  return {
    id: user.id,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
    managerId: user.managerId,
    photo: user.photo,
    employees: [],
    fullname: `${user.firstName} ${user.lastName}`,
  };
}

async function getUserById(userId: number): Promise<User | undefined> {
  const users = await NetworkService.getUsers();

  const user = users.find((i: UserResponse) => i.id === userId);

  return user ? createUserFromResponse(user) : undefined;
}

async function getUsers(): Promise<User[]> {
  const usersResponse = await NetworkService.getUsers();

  return usersResponse.map(createUserFromResponse);
  // return [
  //   {
  //     id: '1',
  //     email: '1@1.co',
  //     firstName: '1',
  //     lastName: '11',
  //     employees: [],
  //   },
  //   {
  //     id: '2',
  //     email: '2@12co',
  //     firstName: '2',
  //     lastName: '22',
  //     employees: [],
  //     managerId: '1',
  //   },
  //   {
  //     id: '3',
  //     email: '3@31.co',
  //     firstName: '3',
  //     lastName: '33',
  //     employees: [],
  //     managerId: '1',
  //   },
  //   {
  //     id: '4',
  //     email: '4@14.co',
  //     firstName: '4',
  //     lastName: '44',
  //     employees: [],
  //     managerId: '3',
  //   },
  //   {
  //     id: '5',
  //     email: '5@15.co',
  //     firstName: '5',
  //     lastName: '55',
  //     employees: [],
  //   },
  // ];
}

const usersService = {
  getUserById,
  getUsers,
};

export default usersService;
