import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface InitialStateTypes {
    isSidebarCollapsed: boolean;
    isDarkMode: boolean;
}

const initialState: InitialStateTypes = {
    isSidebarCollapsed: false,
    isDarkMode: false
}


export const globalStyles = createSlice({
    name: 'global',
    initialState,
    reducers: {
        setIsSidebarCollapsed: (state,action:PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },
        setIsDarkMode: (state,action:PayloadAction<boolean>) => {
            state.isSidebarCollapsed = action.payload
        },
    }
})

export const { setIsSidebarCollapsed, setIsDarkMode } = globalStyles.actions;

export default globalStyles.reducer;