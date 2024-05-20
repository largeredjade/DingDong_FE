
import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test'
import loginPopupReducer from "./loginPopup";
import userReducer from "./user"

export default configureStore({
    reducer: {
        test: testReducer,
        popup:loginPopupReducer,
        user: userReducer
    },
})