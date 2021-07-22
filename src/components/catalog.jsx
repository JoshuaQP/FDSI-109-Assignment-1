import React, { Component } from 'react';
import ItemService from "../services/itemService";



import Item from './item';
import "./catalog.css";



class Catalog extends Component {
    state = {  
        items: [ ],
    };

  
    render() { 
        console.log("render catalog")
        return (
            
            <div className="catalog-page">
                
                {/* <h3> Our amazing catalog with {this.state.items.length} products</h3> */}
                {this.state.items.map((prod) => (
                <Item key= {prod._id }  prod={prod} ></Item>))}

                
            

                 
            </div>

            
            
          );
    }

    async componentDidMount() {
      console.log("did mount")


      //call ther service to get the list of items

       var itemService = new ItemService();
       var items = await itemService.getCatalog();
       this.setState({ items: items});
       

       let cats= await itemService.getCategory();
       console.log("caregories from server", cats);


       this.setState({categories: cats });
    }
}
 
export default Catalog ;