
import './App.css';

/* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
// Add the "/components/" part to the link
import { CartProvider } from './components/CartContext'; 


import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';

import Navbar from './components/Navbar';
import CartDisplay from './components/CartDisplay';

function App() {
  return (
    <CartProvider>

    <BrowserRouter>
      <div className="App">
        <Navbar />
        
        <header className="App-header">
          <h1 className='shadows-into-light-two-regular'><img src="images/sss.jpeg" alt="sss" height={100} className='mt-2' />Viva Aesthetics

          </h1>

        </header>
        
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/CartDisplay' element={<CartDisplay/>} />
          <Route path='/makepayment' element={<Makepayment />} />



        </Routes>
        
        <hr />
        

        <div>
          <footer className=' p-2 text-center text-dark'>
            <marquee behavior="" direction=""><h2><i>&copy;. 2026,Viva aesthetics.All rights reserved∣Designed By Viva</i></h2></marquee>
          </footer>
        </div>
        

      </div>
    </BrowserRouter>
    </CartProvider>


  );
}

export default App;
