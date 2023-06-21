import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ChatState {
  selectedChat: number | null;
}

const initialState: ChatState = {
  selectedChat: null,
};

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
      changeSelectChat: (state, action: PayloadAction<number | null>) => {
      state.selectedChat = action.payload;
    },
  },
  extraReducers: {},
});

export const { changeSelectChat } = chatSlice.actions;

export default  chatSlice.reducer