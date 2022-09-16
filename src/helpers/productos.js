import { collection, getDocs, getDoc, doc, query, where } from 'firebase/firestore'
import dataObjetos from '../data/dataObjetos.json'
import {db} from "../utils/firebase.js"


const getFetch = new Promise ((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve(dataObjetos)
        reject(err => console.log(err))
    }, 3000) 
})

export const getAllProducts = async() =>
{
    const query = collection(db, "Items");
    const response = await getDocs(query);
    const docs = response.docs;

    const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
    return data;
}

export const getProductsByType = async(id) =>
{
    const q = query(
        collection(db, "Items"),
        where("idTipoObjeto", "==", id)
    );
    
    const response = await getDocs(q);
    const docs = response.docs;

    const data = docs.map(doc=>{return {...doc.data(), id:doc.id}})
    return data;
}

export const getProduct = async(id) =>
{

    const query = doc(db, "Items", id);
    const response = await getDoc(query);
    const product = {
        ...response.data(),
        id: response.id
    }
    console.log("prd", id);
    
    return product;
}

export default getFetch;