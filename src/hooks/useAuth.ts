import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { saveUser, startLoading } from "../state/auth/authSlice";
import { auth } from "../libs/firebase";

export const useAuth = () =>{
    const { value: user, loading } = useSelector((state: RootState) => state.auth)
    const dispatch = useDispatch<AppDispatch>();
    console.log(`user from state: ${user}`)

    useEffect(() =>{
        dispatch(startLoading());
        const unsubscribe = onAuthStateChanged(auth, (user) =>{
            if(user){
                dispatch(saveUser({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    photoURL: user.photoURL,
                    refreshToken: user.refreshToken,
                }));
            }else{
                dispatch(saveUser(undefined));
            }
        })
        return () => unsubscribe();
    },[dispatch])

    return { user, loading };
}
