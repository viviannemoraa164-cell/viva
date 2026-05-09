import React from 'react';
import { useCart } from './CartContext'; 

const CartDisplay = () => {
    // 2. We now pull 'removeFromCart' out of the backpack here
    const { cartItems, removeFromCart } = useCart();
    
    const imagepath = "http://alwaysdata.net";
    const total = cartItems.reduce((acc, item) => acc + Number(item.product_cost), 0);

    return (
        <div className="container mt-5 pt-5">
            <h1 className="text-success mb-4 text-center" style={{fontFamily: 'cursive'}}>Your Shopping Cart</h1>
            <div className="row">
                <div className="col-md-8">
                    {cartItems.length === 0 ? (
                        <div className="alert alert-info text-center">Your cart is empty!</div>
                    ) : (
                        cartItems.map((item, index) => (
                            <div key={index} className="card mb-3 shadow-sm">
                                <div className="card-body d-flex align-items-center">
                                <img 
    src={"http://vivakifaru.alwaysdata.net/static/images/" + item.product_photo} 
    alt={item.product_name} 
    style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "8px"}} 
/>

                                    <div className="flex-grow-1 ms-3">
                                        <h5 className="card-title mb-0" style={{fontFamily: 'cursive'}}>{item.product_name}</h5>
                                        <p className="text-muted mb-0">Ksh {item.product_cost}</p>
                                    </div>
                                    
                                    {/* 3. THE REMOVE BUTTON IS NOW LINKED */}
                                    <button 
                                        className="btn btn-sm btn-danger" 
                                        onClick={() => removeFromCart(index)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
                
                <div className="col-md-4">
                    <div className="card shadow border-0">
                        <div className="card-body text-center">
                            <h3 style={{fontFamily: 'cursive'}}>Summary</h3>
                            <hr />
                            <div className="d-flex justify-content-between mb-3">
                                <span>Total Items:</span>
                                <span>{cartItems.length}</span>
                            </div>
                            <h5 className="mb-4">Total: <span className="text-success">Ksh {total}</span></h5>
                            <button className="btn btn-dark w-100 py-2" style={{borderRadius: "10px"}}>Checkout Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartDisplay;
