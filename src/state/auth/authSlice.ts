import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";

type User = {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
  refreshToken: string;
}

interface AuthState {
    value?: User;
    loading: boolean;
}

const initialState: AuthState = {
    value: undefined,
    loading: true,
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction< User | undefined>) =>{
            state.value = action.payload;
            state.loading = false;
        },
        startLoading:(state) =>{
            state.loading = true;
        }
    }
})

export const { saveUser, startLoading } = authSlice.actions
export default authSlice.reducer;