import { createSlice } from '@reduxjs/toolkit';

// 변수 초기화
const initialStateValue = {student_id: "", pw: ""}

export const testSlice = createSlice({
    name: "test",
    initialState: { value: initialStateValue},
    reducers: {
        testLogin: (state, action) => {
            state.value = action.payload
        },
        testLogout: (state) => {
            state.value = initialStateValue
        }
    },
});

export const { testLogin, testLogout } = testSlice.actions;

export default testSlice.reducer;