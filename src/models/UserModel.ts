import { User } from '../interfaces/UserInterface';

const users: User[] = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
  // Add more mock users as necessary
];

export const getUserById = (id: string): User | undefined => {
  return users.find(user => user.id === id);
};
