const URL = 'https://quiet-lowlands-69499.herokuapp.com'  //benchmark url for fetching data

export const getCows = async ()=>{
    const resp = await fetch(`${URL}/cows`);
    const data = await resp.json();
    return data;
}