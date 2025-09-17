import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../state/store";
import { saveUser } from "../state/auth/authSlice";
import { auth } from "../libs/firebase";

export const useAuth = () =>{
    const user = useSelector((state: RootState) => state.auth.value)
    const dispatch = useDispatch<AppDispatch>();
    console.log(`user from state: ${user}`)
    useEffect(() =>{
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
}
