import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = {
    isAuthenticated: false,
    showButton: false,
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true;
            state.showButton = true;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.showButton = false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice.reducer;