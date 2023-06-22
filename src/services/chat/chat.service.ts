import { instanse } from 'api/api.interceptor'

const CHATS = 'chats'

export const ChatService = {
	async getChatById(id: number) {
		 const response = await instanse({
            url: `${CHATS}/by-id/${id}`,
            method: 'GET'
        })

        return response
	},

    async getAllChats() {
        const response = await instanse({
            url: `${CHATS}`,
            method: 'GET'
        })

        return response
	},
	
	async createChat(userIds: number[]) {
		const response = await instanse({
            url: `${CHATS}/create`,
			method: 'POST',
			data: { users :userIds}
        })

        return response
	}
}