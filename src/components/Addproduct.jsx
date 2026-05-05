import React,{useState} from 'react'

import axios from 'axios'


const Addproduct = () => {
  // declare our state here
  const [product_name , setProductName]=useState("")
  const[product_description , setProductDescription]=useState("")
  const[product_cost , setProductCost]=useState("")
  const[product_photo , setProductPhoto]=useState("")
  // 3 states for hosting data 
  const[loading,setLoading]=useState("")
  const[success,setSuccess]=useState("")
  const[error,setError]=useState("")
  // function to handlesubmit 
  const handlesubmit = async (e) =>{
    e.preventDefault()
    setLoading("please wait...")
    // empty envelope
    const formData = new FormData()
    
    formData.append("product_name", product_name)
    formData.append("product_description",product_description)
    formData.append("product_cost",product_cost)
    formData.append("product_photo",product_photo)
    try{
      const response = await axios.post("http://vivakifaru.alwaysdata.net/api/add_product",formData)
      setSuccess(response.data.message)
      setLoading("")
    }catch (error){
      setError(error.message)
        setLoading("");
        

    }
  }
  return (
    <div className='row justify-content-center mt-2'>
        <div className='col-md-6 card shadow p-4 bg-dark'>
            <h1 className='text-warning'>Add products🦋</h1>

            {/* bind the states */}
            <h2 className="text-info">{loading}</h2>
            <h2 className="text-success">{success}</h2>
            <h2 className="text-danger">{error}</h2>
             
           
            <form action="" onSubmit={handlesubmit}>

              <input type=" text" placeholder='Enter product name' className='form-control' onChange={(e)=>setProductName(e.target.value)}/><br />
              <textarea name="" id="" className='form-control' placeholder='Enter description' onChange={(e)=> setProductDescription(e.target.value)}></textarea><br />
              <input type="number" placeholder='Enter product cost' className='form-control' onChange={(e)=> setProductCost(e.target.value)} /><br />
              <input type="file" accept='image' className='form-control' onChange={(e)=>setProductPhoto(e.target.files[0])} /><br />
              <button type='submit' className='btn btn-success w-100'>Add product</button>

            </form>




        </div>

    </div>
  )
}

export default Addproduct