import { IDefaultData } from "./default.interface"
import { IMessage } from "./message.interface"
import { IUser } from "./user.interface"

export interface IChat extends IDefaultData {
    users: IUser[]
    messages: IMessage[]
}

export interface IInitialStateChat {
    selectChat: number | null
}

export interface IMessageSend {
    chatId: number
    content: string
}