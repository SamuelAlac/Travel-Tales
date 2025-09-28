import { addDoc, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { getCollection } from "../libs/firebase"
import type { CreateTaleMutation, TaleProp, UpdateTaleMutation } from "../types/tales";

export const getTales = async () =>{
    try {
        const talesRef = getCollection('Tales');
        const snapShot = await getDocs(talesRef);
        const response = snapShot.docs.map(doc => ({
            TaleID: doc.id,
            Author: doc.data().Author,
            AuthorID: doc.data().AuthorID,
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
            AuthorID: response.data().AuthorID,
            Title: response.data().Title,
            Description: response.data().Description,
            Story: response.data().Story,
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
        const data = response.data();
        if(!data){
            throw new Error('Failed to create new tale')
        }
        return {
            TaleID: response.id,
            Author: data.Author,
            AuthorID: data.AuthorID,
            Title: data.Title,
            Description: data.Description,
            Story: data.Story,
        }
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}

export const updateTale = async ({ taleID, taleData }: UpdateTaleMutation) =>{
    try {
        const talesRef = getCollection('Tales');
        const taleDoc = doc(talesRef, taleID)
        const tale = await getDoc(taleDoc)
        if(!tale.exists()){
            return { message: `Tale with the id of ${taleID} does not exist` }
        }

        await updateDoc(taleDoc, taleData)
        return { taleID, ...taleData }
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}

export const deleteTale = async ({ taleID }: TaleProp) =>{
    try {
        const talesRef = getCollection('Tales');
        const taleDoc = doc(talesRef, taleID)
        const tale = await getDoc(taleDoc)
        if(!tale.exists()){
            return { message: `Tale with the id of ${taleID} does not exist` }
        }

        await deleteDoc(taleDoc)
        return { message: 'tale deleted successfully', taleID }
    } catch (err) {
        console.log(`Database error: ${err}`)
    }
}