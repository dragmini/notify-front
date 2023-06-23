import { UserService } from "services/user/user.service"
import { errorCatch } from "api/api.helper"
import { useQuery } from "react-query"

export const useProfile = () => {
    const { data, isLoading, error, refetch } = useQuery(['get profile'], () => UserService.getProfile(), {
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
    })
    
    
    return {profileData: data, profileIsLoading: isLoading, error, refetch}
}