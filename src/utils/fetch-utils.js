const URL = 'https://quiet-lowlands-69499.herokuapp.com'  //benchmark url for fetching data

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

// FUNCTION TO GET BREEDS DATA FROM API
export const getBreeds = async ()=>{
    const resp = await fetch(`${URL}/breeds`);
    const data = await resp.json();
    return data;
}