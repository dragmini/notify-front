import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user.slice';
import chatSlice from './chat/chat.slice';

const isClient = typeof window !== 'undefined'

let mainReducer

const combinedReducers = combineReducers({
	user: userSlice.reducer,
	chat: chatSlice
})

if (isClient) {
	const { persistReducer } = require('redux-persist')
	const storage = require('redux-persist/lib/storage').default

	const persistConfig = {
		key: 'notify',
		storage,
	}

	mainReducer = persistReducer(persistConfig, combinedReducers)
} else {
	mainReducer = combinedReducers
}

const store = configureStore({
  reducer: mainReducer,
});

export default store;
export type TypeRootState = ReturnType<typeof mainReducer>