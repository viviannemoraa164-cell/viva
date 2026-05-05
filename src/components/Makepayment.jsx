import axios from 'axios'
import React, { useState } from 'react'
import { useLocation } from "react-router-dom"

const Makepayment = () => {
    const {singleproduct} = useLocation().state || {}
    const imagepath = "http://vivakifaru.alwaysdata.net/static/images/"
    // declare the states 
    const[phone , setPhone] =useState("")
    const[loading,setLoading]=useState("")
    const[success,setSuccess]=useState("")
    const[error,setError]=useState("")
    const handlesubmit = async(e) =>{
      e.preventDefault ()
      setLoading("Please wait...")
      // empty digital envelope
      const formdata =new FormData()
      formdata.append("amount",singleproduct.product_cost)
      formdata.append("phone",phone)
      try {
        const response =await axios.post("http://vivakifaru.alwaysdata.net/api/mpesa_payment",formdata)
        setSuccess(response.data.message)
        setLoading("")

      } catch (error) {
        setError(error.message)
        setLoading("");
        
      }
    }

  return (
    <div className="row justify-content-center">
        <h1 className='text-success  shadows-into-light-two-regular'>Make payment - Lipa Na Mpesa</h1>
        <div className='col-md-8 card shadow p-4'>
          

            {/* image goes here */}
            <img src={imagepath + singleproduct.product_photo} alt=""  style={{height : "200px" , objectFit:"contain"}} />


          <h5 className='text-success text-start  shadows-into-light-two-regular'>{singleproduct.product_name}</h5>
            <p className='text-start shadows-into-light-two-regular'>{singleproduct.product_description}</p>
            <b className='text-start text-danger shadows-into-light-two-regular'>Ksh {singleproduct.product_cost}</b>
            {/* bind the states  */}
            
            <h2 className="text-dark">{loading}</h2>
            <h2 className="text-dark">{success}</h2>
            <h2 className="text-dark">{error}</h2>

            <form action="" onSubmit={handlesubmit}>
                <input type="number" className="form-control" placeholder='Enter phone 254xxxxxxxxx' onChange={(e)=>setPhone(e.target.value)}/><br />
                <button type='submit'    className='btn btn-dark w-100  shadows-into-light-two-regular'>Make payment</button>
            </form>


        </div>
    </div>
  )
}

export default Makepayment