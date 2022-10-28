const url = 'https://server-carta.herokuapp.com/'

export const getAll=(state,nameCollection)=>{
    fetch(url+nameCollection,{method:'GET'})
        .then(res=>res.json())
        .then(res=>state(res))
}

export const getInfo=(state,nameCollection)=>{
    fetch(`${url}infoUser/${nameCollection}`,{method:'GET'})
        .then(res=>res.json())
        .then(res=>state(res))
}
