import { createSlice } from "@reduxjs/toolkit";

const initialInboxState = {
  email: {},
  read: false,
};

const inboxSlice = createSlice({
  name: "inbox",
  initialState: initialInboxState,
  reducers: {
    onEmailFetch(state, action) {
      state.email = action.payload;
    },
    onEmailRead(state, action) {
      state.email[action.payload.read] = true;
    },
  },
});

export const inboxActions = inboxSlice.actions;
export default inboxSlice;
