import "./App.css";
 import NavBar from "./components/navBar";
import Footer from "./components/footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from "./components/catalog";
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Cart from "./components/cart";
import Admin from "./components/admin";
import GlobalState from "./context/globalState";
import ShoppingList from "./components/shoppinglist";
// import Section from './components/section';


function App() {
  return (
    <GlobalState>
    <BrowserRouter>
      <div className="App">
       <NavBar>  </NavBar>
        <div class="custom-shape-divider-bottom-1625605096">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              class="shape-fill"
            ></path>
          </svg>
        </div>

        
        
        <Switch>
          <Route path="/" exact compenent={Home}></Route>
          <Route path="/catalog" exact component={Catalog}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/cart" exact component={Cart}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/admin" exact component={Admin}></Route>
          <Route path="/list" exact component={ShoppingList}></Route>
        </Switch>

        <Footer> </Footer>
      </div>
    </BrowserRouter>
    </GlobalState>
  );
}

export default App;

// Admin

/// admin route
