import { createSlice } from '@reduxjs/toolkit';

//변수 바꿔야됨
const initialStateValue = {user_id: "", token: ""}
const logoutValue = null

export const userSlice = createSlice({
    name: "user",
    initialState: { value: initialStateValue},
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = logoutValue
        }
    },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;