import { IDefaultData } from "./default.interface"

export interface IUser extends IDefaultData {
	id: number
	email: string
	firstName: string
	secondName: string
	avatarPath: string
	password: string
	phone: string
	birthDate: string
}