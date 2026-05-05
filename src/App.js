
import './App.css';

/* The following line can be included in your src/index.js or App.js file */

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Addproduct from './components/Addproduct';
import Getproducts from './components/Getproducts';
import Makepayment from './components/Makepayment';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <header className="App-header">
          <h1 className='shadows-into-light-two-regular'><img src="images/sss.jpeg" alt="sss" height={100} className='mt-2' />Viva Aesthetics

          </h1>

        </header>
        <nav>
          <Link to="/signup" className='btn btn-success m-1'>🌀Signup</Link>
          <Link to="/signin" className='btn btn-success m-1'>🎗️Signin</Link>
          <Link to="/addproduct" className='btn btn-success m-1'>➰addproduct</Link>
          <Link to="/" className='btn btn-success m-1'>🎀Get products</Link>


        </nav>
        <Routes>
          <Route path='/' element={<Getproducts />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/addproduct' element={<Addproduct />} />
          <Route path='/makepayment' element={<Makepayment />} />



        </Routes>
        <Footer />
        <div>
          <footer className='bg-success p-2 text-center text-dark'>
            <h2><i>Developed by Viva &copy;. 2026</i></h2>
          </footer>
        </div>

      </div>
    </BrowserRouter>


  );
}

export default App;
