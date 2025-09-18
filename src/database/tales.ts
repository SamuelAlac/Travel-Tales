import { doc, getDoc, getDocs } from "firebase/firestore";
import { getCollection } from "../libs/firebase"
import type { TaleProp } from "../types/tales";

export const getTales = async () =>{
    try {
        const talesRef = getCollection('Tales');
        const snapShot = await getDocs(talesRef);
        const response = snapShot.docs.map(doc => ({
            TaleID: doc.id,
            Author: doc.data().Author,
            Title: doc.data().Title,
            Description: doc.data().Description,
            Topic: doc.data().Topic,
            Message: doc.data().Message,
        }))
        
        return response;
    } catch (err) {
        console.log('Database error')
    }
}

export const getTale = async ({ taleID }: TaleProp) =>{
    try {
        const talesRef = getCollection('Tales');
        const response = await getDoc(doc(talesRef, taleID))
        return response.exists() 
        ? {
            TaleID: response.id,
            Author: response.data().Author,
            Title: response.data().Title,
            Description: response.data().Description,
            Topic: response.data().Topic,
            Message: response.data().Message,
        }
        : {};

    } catch (err) {
        console.log('Database error')
    }
}