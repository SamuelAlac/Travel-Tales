import { addDoc, doc, getDoc, getDocs } from "firebase/firestore";
import { getCollection } from "../libs/firebase"
import type { CreateTaleMutation, TaleProp } from "../types/tales";

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
        console.log(`Database error: ${err}`)
    }
}

export const getTaleByID = async ({ taleID }: TaleProp) =>{
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
        console.log(`Database error: ${err}`)
    }
}

export const createTale = async ({ taleData }: CreateTaleMutation) =>{
    try {
        const taleRef = getCollection('Tales');
        const newTale = await addDoc(taleRef, taleData);
        const response = await getDoc(newTale)
        return response.exists()
        ? {
            TaleID: response.id,
            Author: response.data().Author,
            Title: response.data().Title,
            Description: response.data().Description,
            Topic: response.data().Topic,
            Message: response.data().Message,
        }
        : 'Failed to create new tale'
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}