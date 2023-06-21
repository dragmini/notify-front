import { useNavigate  } from 'react-router-dom';
import { useEffect } from 'react'

import { useAuth } from '../../hooks/useAuth'

export const useAuthRedirect = () => {
	const { user } = useAuth()
	const navigate = useNavigate();


	useEffect(() => {
		if (user) navigate('/chat')
		else navigate('/auth')
	}, [user])
}