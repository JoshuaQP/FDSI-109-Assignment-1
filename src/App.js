
import './App.css';
import NavBar from './components/navBar';
import Footer from './components/footer';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Catalog from './components/catalog';
import "bootstrap/dist/js/bootstrap.min.js";


function App() {
  return (
    <div className="App">

      <NavBar></NavBar>
       <h4>Rates</h4>

      <Catalog></Catalog>

      <Footer> </Footer>
    </div>
  );
}

export default App;


