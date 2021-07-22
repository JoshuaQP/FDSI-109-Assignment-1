import React, { Component } from 'react';
import "./admin.css";


class Admin extends Component {
    state = { 
        title: "",
        price: "",
        category: "",
        discount: "",
        image: ""
     }
    render() { 
        return ( 
        <div className="myForm">
            
                    
            <label htmlFor="">Title: </label>
            <input type="text" name="title"  value={this.state.title} onChange={this.handleInputChange}/> <br/>

            <label htmlFor="">Price: $</label>
            <input type="number" name="price" value ={this.state.price} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Category: </label>
            <input type="number" name="category" value ={this.state.category} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Discount: </label>
            <input type="number" name="category" value ={this.state.discount} onChange={this.handleInputChange} /> <br/>

            <label htmlFor="">Image: </label>
            <input type="number" name="image" value ={this.state.image} onChange={this.handleInputChange} /> <br/>

            <button className = "btn btn-dark" onClick={this.handleInputChange.Save}> Save product </button>
         
        </div>  );
    }

    handleInputChange = (event) => { 
        this.setState({ [event.target.name]: event.target.value});
    };

    handleSave =() => {
        console.log("saving products");
        let item = {...this.state};
        console.log(item);
 




    };
}


export default Admin;