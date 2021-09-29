export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  fullname: string;
  managerId?: number;
  employees: User[];
  photo?: string;
}
