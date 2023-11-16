export async function getProductList(searchTerm){
    const url = searchTerm ? `${process.env.REACT_APP_HOST}/444/products?name_like=${searchTerm}`: `${process.env.REACT_APP_HOST}/444/products`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}



export async function getProduct(url){

    const response = await fetch(url);
    const data = await response.json();
    return data;
}



export async function getFeaturedProducts(url){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}