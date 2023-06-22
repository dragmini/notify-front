import { instanse } from 'api/api.interceptor'

const USERS = 'user'

export const UserService = {

    async getAllUsers() {
        const response = await instanse({
            url: `${USERS}/list`,
            method: 'GET'
        })

        return response
    }
}