import { instanse } from 'api/api.interceptor'

const USERS = 'user'

export const UserService = {

    async getAllUsers() {
        const response = await instanse({
            url: `${USERS}/list`,
            method: 'GET'
        })

        return response
    },

     async getProfile() {
        const response = await instanse({
            url: `${USERS}/profile`,
            method: 'GET'
        })

        return response
    },
     
     async searchUserBySlug(slug: string) {
        const response = await instanse({
            url: `${USERS}/${slug}`,
            method: 'GET'
        })

        return response
    }
}