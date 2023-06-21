import { IDefaultData } from "./default.interface"

export interface IUser extends IDefaultData {
	email: string
	firstName: string
	secondName: string
	avatarPath: string
	password: string
	phone: string
	birthDate: string
}