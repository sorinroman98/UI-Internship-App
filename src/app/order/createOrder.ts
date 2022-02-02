import { IUser } from "../user/user";


export interface ICreateOrder{
    customer: IUser;
    idProducts: String[];
}