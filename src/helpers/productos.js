import dataObjetos from '../data/dataObjetos.json'


const getFetch = new Promise ((resolve, reject) =>
{
    setTimeout(() =>
    {
        resolve(dataObjetos)
        reject(err => console.log(err))
    }, 3000) 
})

export default getFetch;