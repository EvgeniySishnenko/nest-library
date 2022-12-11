import { IUser } from './user.interface';

export interface CreateUserDto extends Omit<IUser, 'id'> {}
