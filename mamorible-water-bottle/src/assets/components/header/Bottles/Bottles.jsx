import { useEffect, useState } from "react";
import Bottle from "../../bottle/bottle";
import './Bottles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../../../utilities/utilities";
import Cart from "../../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart,setCart] = useState([])
    useEffect(()=>{
        fetch('bottle.json')
        .then(res => res.json())
        .then(data => setBottles(data))
    },[])

    useEffect(()=>{
        console.log('load data', bottles.length )
        if(bottles.length){
            const storedCart = getStoredCart();
            console.log(storedCart,bottles)
            const saveCart = []
            for(const id of storedCart){
                const bottle = bottles.find(bottle => bottle.id === id);
                if(bottle){
                    saveCart.push(bottle);
                }
            }
            console.log(saveCart);
            setCart(saveCart);

        }
    },[bottles]);

    const handleRemoveFromCart = id =>{
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);
        removeFromLS(id);
    }

    const handleToCard = bottle =>{
        const newCart = [...cart, bottle]
        setCart(newCart)
        addToLS(bottle.id)
    }
    return (
        <div>
            <h2>Bottles Available: {bottles.length}</h2>
            <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
            <div className="bottle-container">
            {
                bottles.map(bottle => <Bottle 
                    key={bottle.id} 
                    bottle={bottle} 
                    handleToCard={handleToCard}
                    ></Bottle>)
            }
            </div>
        </div>
    );
};

export default Bottles;