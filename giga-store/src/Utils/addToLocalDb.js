import {  toast } from 'react-toastify';
const getAddToCart=()=>{
    const cartString = localStorage.getItem("cart");
    if(cartString){
        const cartPars = JSON.parse(cartString);
        return cartPars;
    } else {
        return [];
    }

}
const getWishList=()=>{
    const wishlistString  = localStorage.getItem('wishlist');
    if(wishlistString) {
        const wishlistInt =JSON.parse(wishlistString);
        return wishlistInt;
    } else {
        return [];
    }
}

const addAddToCart=(id)=>{
    const cartPars = getAddToCart();
    if(cartPars.includes(id)) {
        console.log('already exist in the cart')
    } else {
        cartPars.push(id);
        const cartString = JSON.stringify(cartPars);
        localStorage.setItem('cart',cartString);
        toast('This item added to your cart list');
    }
}
const addToWIshList =(id)=>{
    const wishlistInt = getWishList();
    if(wishlistInt.includes(id)) {
        console.log('already exist in the wishlist');
    } else {
        wishlistInt.push(id);
        const wishlistString=JSON.stringify(wishlistInt);
        localStorage.setItem('wishlist',wishlistString);
        toast('This item added to your wishlist');
    }
}

export {addAddToCart, getAddToCart, addToWIshList ,getWishList}