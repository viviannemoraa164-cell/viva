import React from 'react'
import { Link } from 'react-router-dom'; 
import { useCart } from './CartContext';

const Navbar = () => {
    const { cartItems } = useCart(); 

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand text-success fw-bold">Glow up</Link>
                <Link className='navbar-brand text-white fw-bold to="/'> <img src="images/sss.jpeg" alt="sss" height={100} className='mt-2' />Viva Aesthetics</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarcollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarcollapse">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/addproduct" className="nav-link">Add product</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-link">Signup</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signin" className="nav-link">Signin</Link>
                        </li>
                        
                        {/* --- CART BUTTON --- */}
                        <li className="nav-item ms-lg-3">
                            <Link to="/CartDisplay" className="btn btn-success position-relative">
                                🛒 Cart
                                {cartItems.length > 0 && (
                                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                        {cartItems.length}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
