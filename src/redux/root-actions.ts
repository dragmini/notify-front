import * as userActions from './user/user.actions'
import * as chatActions from './chat/chat.actions'

export const rootAction = {
	...userActions,
	...chatActions
}