import React, { Component } from 'react';
import "./navBar.css";
import {Link} from "react-router-dom"
import storeContext from '../context/storeContext';





class NavBar extends Component {
    static contextType =storeContext;
    state ={}
    render() {

        return( 
          <div className="cf">
        <nav className="navbar navbar-expand-lg navbar-light bg-gray" >
        <div className="container-fluid">
          
          <a className="navbar-brand active" href="/#"> <span>GOOD VIBES ONLY</span></a> 
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link  "  to="/catalog"> <span className="main-c"> Rates </span> </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to= "/about"><span className="main-a"> About  </span>  </Link>
              </li>
              <li className="nav-item">
                
                <Link className="nav-link" to="/contact"><span className="main-b"> Contact   </span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list"><span  className="main-b "> Shopping List  </span></Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link disabled" href="/#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
            <Link className="btn btn-outline-primary" to="/cart">
              <i aria-hidden="true" className="fa fa-cart-plus mr-1"></i>
              View Cart &nbsp;
              <span className="badge badge-secondary cart-badge">{this.context.cart.length}
              </span>
            </Link>
           </form>

          </div>
        </div>
      </nav>
      </div>
      
      
    );

    }

    }

 
export default NavBar;