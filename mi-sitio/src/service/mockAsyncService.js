import data from "../assets/productos.json"

function getItem (idCategory){
   
    return new Promise((resolve) =>{
        if(idCategory === undefined)
        {
        setTimeout(() =>
        {
            resolve(data.items)
        },100)}
        else{
            setTimeout(() =>
        {
            let categoryReq = data.items.filter( item => {
                return item.category === idCategory})
            resolve(categoryReq)
        },100)
        }
    })
}




 export function getSingleItem (itemid){
    //usamos find para encontrar el producto que deseamos
    let itemReq = data.items.find( item => {
        return item.id === Number(itemid)})

        
    return new Promise((resolve,reject) =>{
        if(itemReq === undefined)
        {
            reject("item no encontrado")
        }
        setTimeout(() =>
        {
            resolve(itemReq)
        },200)
    })
}
export default getItem;