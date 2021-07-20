import React, { Component } from 'react';
import ItemService from "../services/itemService";
import Item from './item';
import "./catalog.css";



class Catalog extends Component {
    state = {  
        items: [ ],
        categories: [],
        selectedCategory: "",
       
    };

  
    render() { 
        
    let itemsToDisplay = this.state.items;

    if(this.state.selectedCategory) {
         itemsToDisplay = itemsToDisplay.filter((item) => item.category === this.state.selectedCategory);
       
    }


        return (
            <div className="catalog-page">
                <h3> Our amazing catalog with {this.state.items.length} products</h3>

                  <div className="filter-btn">

                      <button onClick={() => this.filterItems("")}  className="btn btn-info"> All items  </button>

                {this.state.categories.map((cat) => (
                <button  onClick={() => this.filterItems(cat)}  className="btn btn-primary" key={cat}> {cat} 
                </button>
                ))}

                </div>

                  <div className="product-container">
                  {itemsToDisplay.map((prod) => (
                <Item key= {prod._id }  prod={prod} ></Item>
                ))}
                </div>   
            </div>
          );
    }


    filterItems = (category) => {
        console.log("Filtering", category);
        this.setState({selectedCategory: category});
    };

    componentDidMount() {
      console.log(" Catalog did mount")


      //call ther service to get the list of items

       var itemService = new ItemService();
       var items = itemService.getCatalog();
       console.log(items);
       this.setState({ items: items});
       //identify the unique categories
       let cats =[];
       for(let i =0; i< items.length; i++) {
           let cat = items[i].category;

           if (!cats.includes(cat)) {
               cats.push(cat);
           }
       }


       this.setState({ categories: cats});
    }
}



 
export default Catalog ;