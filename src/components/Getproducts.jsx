import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from './Carousel'
import Footer from './Footer'
import WishlistApp from './wishlist'



const Getproducts = () => {
    let navigate = useNavigate()
    // declare our states here 
    const [loading, setLoading] = useState("")
    const [products, setProducts] = useState([])
    const [error, setError] = useState("")
    const [search, setSearch] = useState("")
    const [visibleCount, setVisibleCount] = useState(8)

    const filtered_products = products.filter((item) =>
        item.product_name.toLowerCase().includes(search.toLowerCase()) ||
        item.product_description.toLowerCase().includes(search.toLowerCase));


    // function to get products 
    const getproducts = async () => {
        setLoading("Please wait....")
        try {
            const response = await axios.get("http://vivakifaru.alwaysdata.net/api/getproducts")
            setProducts(response.data)
            setLoading("")

        } catch (error) {
            setError(error.message)
            setLoading("");


        }
    }
    // call the function 
    useEffect(() => {
        getproducts()
    }, [])
    console.log(products)
    const imagepath = "http://vivakifaru.alwaysdata.net/static/images/"


    return (
        <div className="container-fluid">
            <div className='row'>
                {/* carousel goes here */}
                <Carousel />
                <h1 className='text-success'>Available products</h1>
                <div className='row justify-content-center mt-3 mb-3'>
                    <input
                        className='form-control w-50'
                        type='search'
                        placeholder='Search Products...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)} />

                </div>
                {/* bind the states  */}
                <h2 className='text-dark text-center'>{loading}</h2>
                <h2 className='text-dark text-center'>{error}</h2>
                {filtered_products.slice(0, visibleCount).map(singleproduct => (
                    <div className="col-md-3  mb-3">
                        <div className='card  shadow   h-100'>


                            {/* image goes here */}
                            <img src={imagepath + singleproduct.product_photo} alt="" style={{ height: "400px" }} />
                            {/* card body goes here */}
                            <div className="card-body shadows-into-light-two-regular">
                                {/* product name goes here */}
                                <h1 className='text-danger'>{singleproduct.product_name}</h1>

                                {/* product description goes here */}
                                <p>{singleproduct.product_description}</p>

                                {/* product cost goes here */}
                                <b className='text-primary'>  Ksh {singleproduct.product_cost}</b><br />

                                {/* purchase now button  */}
                                <button className='btn btn-dark w-100' onClick={() => navigate("/makepayment", { state: { singleproduct } })}>Purchase now</button>

                            </div>

                        </div>
                    </div>
                ))}
                <div className='text-center mt-3'>
                    {visibleCount < filtered_products.length && (
                        <button className='btn btn-dark'
                            onClick={() => setVisibleCount(visibleCount + 8)}

                        >
                            Load more
                        </button>

                    )
                    }
                    <Footer/>

                </div>


            </div>
        </div>
      
    )
    

        


}


export default Getproducts