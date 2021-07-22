import React, { Component } from 'react';
import "./itemInCart.css";






class ItemInCart extends Component {
    state = {  };
    render( ) { 
        return ( 

           <div className="item-In-cart" >
               <img src ={"/images/products/" + this.props.prod.image} alt="item"/> 

              <h4>{this.props.prod.title}</h4>
              <h4>{this.props.prod.category}</h4>

              <label>{this.props.prod.quantity}</label>
              <label>${this.props.prod.price}</label>
              <label>${this.getTotal()} </label>

              <button>Remove</button>


           </div>


         );
    }
    getTotal = () => {
        let total = this.props.prod.price * this.props.prod.quantity;
        return total.toFixed(2);
    };
}
 
export default ItemInCart;