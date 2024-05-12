import { createSlice } from '@reduxjs/toolkit';
const  initialStateValue =  {showPopup: false, closePopup:true}
export const popupSlice = createSlice({
    name: 'loginPopup',
    initialState: { value: initialStateValue},
    reducers: {
        showPopup: (state) => {
            state.value.showPopup = true;
            state.value.closePopup = false;
        },
        closePopup: (state) =>{
            state.value.showPopup = false;
            state.value.closePopup = true;
        }
    },
});

export const { showPopup, closePopup } = popupSlice.actions;

export const selectIsPopupShown = (state) => state.popup.value.showPopup;

export default popupSlice.reducer;