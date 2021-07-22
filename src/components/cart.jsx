import React, { Component } from 'react';
import storeContext from '../context/storeContext';
import "./cart.css" 
import ItemInCart from './itemInCart';


class Cart extends Component {
    static contextType = storeContext;

    state = {  };
    render() { 
        return ( 
            <div className="cart-page">
            <p>This is my cart</p>
           <div className="product-container">
               {this.context.cart.map((prod) => (
           <ItemInCart key={prod._id} prod={prod}> </ItemInCart> ))}

           </div>
           </div>
            
         );
    }
}
 
export default Cart;