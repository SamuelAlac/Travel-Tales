import { addDoc, doc, getDoc } from "firebase/firestore";
import { getCollection } from "../libs/firebase"
import type { CreateUserMutation } from "../types/user";

export const getUserByID = async (userID: string) =>{
    try {
        const userRef = getCollection('Users');
        const response = await getDoc(doc(userRef, userID))
        return response.exists() 
        ? {
            Username: response.data().Username,
            Email: response.data().Email,
        }
        : {};
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}

export const createUser = async ({ userData }: CreateUserMutation) =>{
    try { 
        const userRef = getCollection('Users');
        const newUser = await addDoc(userRef, userData);
        const response = await getDoc(newUser)
        return response.exists()
        ? {
            UserID: response.id,
            Username: response.data().Username,
            Email : response.data().Email,
        }
        : 'Failed to create new user'
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}