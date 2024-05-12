
import { configureStore } from '@reduxjs/toolkit';
import testReducer from './test'
import loginPopupReducer from "./loginPopup";

export default configureStore({
    reducer: {
        test: testReducer,
        popup:loginPopupReducer
    },
})