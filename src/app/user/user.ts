export interface IUser{
    id: number;
    email: String;
    name: String; 
    password: String; // Encrypted
    role: String; // admin || user 
}