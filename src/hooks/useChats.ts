import { errorCatch } from "../api/api.helper"
import { ChatService } from "../services/chat/chat.service"
import { useQuery } from "react-query"

export const useChats = () => {
    const { data, isLoading, error, refetch } = useQuery(['get chats'], () => ChatService.getAllChats(), {
			select: ({ data }) => data,
			onError: error => {
				console.log(errorCatch(error))
			}
    })
    
    
    return {data, isLoading, error, refetch}
}