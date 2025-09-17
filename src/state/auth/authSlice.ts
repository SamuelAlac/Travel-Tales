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
}

const initialState: AuthState = {
    value: undefined,
};

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        saveUser: (state, action: PayloadAction< User | undefined>) =>{
            state.value = action.payload;
        }
    }
})

export const { saveUser } = authSlice.actions
export default authSlice.reducer;