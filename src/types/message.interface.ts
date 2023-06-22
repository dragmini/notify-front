import { IUser } from "./user.interface"

export interface IMessage {
    id: number
    chatId: number
    user: IUser
    content: string
    createdAt: string
}