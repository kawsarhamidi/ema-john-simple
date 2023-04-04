import { getShoppingCart } from "../utilities/fakedb";

const cartProductsLoader = async () =>{
    const loaderProducts = await fetch('products.json');
    const products = await loaderProducts.json();

    //if cart data is in database, you have to use asysc await
    const storedCart =  getShoppingCart();
    const savedCart = [];
    console.log(storedCart);
    for (const id in storedCart) {
        const addedProduct = products.find(pd => pd.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    // if you need to send teo things
    // return [savedCart , products]
    // return { products, cart: savedCart}
    
    return savedCart;
}

export default cartProductsLoader;