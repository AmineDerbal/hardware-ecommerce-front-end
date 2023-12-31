import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userModal: false,
};

const toggleSlice = createSlice({
  name: 'toggle',
  initialState,
  reducers: {
    toggleUserModal(state, action) {
      const userModal = action.payload;
      return { ...state, userModal };
    },
  },
});

export const { toggleUserModal } = toggleSlice.actions;
export default toggleSlice.reducer;
