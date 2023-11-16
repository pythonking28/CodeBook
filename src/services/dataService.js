function getSession(){
    const token = JSON.parse(sessionStorage.getItem("token"));
    const cbid = JSON.parse(sessionStorage.getItem("cbid"));

    return {token, cbid}
}


export async function getUser(){

    const browserData = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/600/users/${browserData.cbid}`, {
        method : "GET",
        headers : {"Content-Type" : "application/json", Authorization : `Bearer ${browserData.token}`},
    });
    const data = await response.json();
    return data;
}



export async function getUserOrder(){
    const browserData = getSession();
    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders?user_id=${browserData.cbid}`,{
        method: "GET",
        headers: {"Content-Type" : "application/json", Authorization : `Bearer ${browserData.token}`}
      })
      const data = await response.json();
      
      return data;
}



export async function createOrder(cartList, total,user){
    const browserData = getSession();
    const order = {
        cartList: cartList,
        amount_paid: total,
        quantity: cartList.length,
        user:{
            name:user.name,
            email: user.email,
            id: user.id
        }

    }

    const response = await fetch(`${process.env.REACT_APP_HOST}/660/orders`, {
        method: "POST",
        headers: {"Content-Type" : "application/json", Authorization : `Bearer ${browserData.token}`},
        body: JSON.stringify(order)
    })
    const data = await response.json();
    return data;

}