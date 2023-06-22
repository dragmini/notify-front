import { UserService } from "services/user/user.service"
import { errorCatch } from "../api/api.helper"
import { useQuery } from "react-query"

export const useUsers = () => {
    const { data, isLoading, error } = useQuery(['get users'], () => UserService.getAllUsers(), {
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
    })
    
    
    return {usersData: data, isLoadingUsers: isLoading, errorUsers: error}
}