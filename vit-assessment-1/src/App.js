import './App.css';
import Navbar from './components/Navbar';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Homescreen from './screens/Homescreen';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Productdescscreen from './screens/Productdescscreen';
import Cartscreen from './screens/Cartscreen';
import Registerscreen from './screens/Registerscreen';
import Loginscreen from './screens/Loginscreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <BrowserRouter> 
       <Routes>
          <Route path='/' element={<Homescreen/>}/>
          <Route path='/product/:id' element= {<Productdescscreen/>}/>
          <Route path='/cart' element= {<Cartscreen/>}/>
          <Route path='/register' element= {<Registerscreen/>}/>
          <Route path='/login' element= {<Loginscreen/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
//to change routes in URL we have implemented react router dom in line 11
// we add the id of the product in the product product.js to access them in line 19

