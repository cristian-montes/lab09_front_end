const URL = 'https://quiet-lowlands-69499.herokuapp.com'  //benchmark url for fetching data

// const URL = 'http://localhost:3001'

// FUNCTION TO GET COW'S DATA FROM API
export const getCows = async ()=>{
    const resp = await fetch(`${URL}/cows`);
    const data = await resp.json();
    return data;
}

// FUNCTION TO GET A COW'S DATA FROM API BY ID
export const getACow = async (id)=>{
    const resp = await fetch(`${URL}/cows/${id}`);
    const data = await resp.json();
    return data;
}

// FUNCTION TO GET BREEDSDATA FROM API
export const getBreeds = async ()=>{
    const resp = await fetch(`${URL}/breeds`);
    const data = await resp.json();
    return data;
}

// FUNCTION TO UPDATE EXISTING COW
export const updateCow = async (cowObject) => {
    
    const resp = await fetch(`${URL}/cows/${cowObject.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cowObject),
    });

    const data = await resp.json();
    return data;
};

// FUNCTION TO CREATE A NEW COW
export const createNewCow = async (cowObject) =>{

    const resp = await fetch(`${URL}/cows/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cowObject),
    });
    const data = await resp.json();
    return data;
}





export const deleteCow = async (cowObject) => {
    const resp = await fetch(`${URL}/cows/${cowObject.id}`,{
        method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer',
    });
    const data = await resp.json(cowObject);
    return data;
}