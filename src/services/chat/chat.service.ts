import { instanse } from 'api/api.interceptor'

const CHATS = 'chats'

export const ChatService = {
	// async main(type: 'login' | 'register', data: IEmailPassword) {
	// 	const response = await axiosClassic<IAuthResponse>({
	// 		url: `/auth/${type}`,
	// 		method: 'POST',
	// 		data
	// 	})

	// 	if (response.data.accessToken) saveToStorage(response.data)

	// 	return response.data
	// },

	// async getNewTokens() {
	// 	const refreshToken = Cookies.get('refreshToken')

	// 	const response = await axiosClassic.post<string, { data: IAuthResponse }>(
	// 		'/auth/login/access-token',
	// 		{ refreshToken }
	// 	)

	// 	if (response.data.accessToken) saveToStorage(response.data)

	// 	return response
	// }

    async getAllChats() {
        const response = await instanse({
            url: `${CHATS}`,
            method: 'GET'
        })

        return response
    }
}