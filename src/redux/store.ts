import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './user/user.slice';

const isClient = typeof window !== 'undefined'

let mainReducer

const combinedReducers = combineReducers({
	user: userSlice.reducer
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