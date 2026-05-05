import React , {useState} from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios'

const Signin = () => {
  // declare our state here 
  const [email,setEmail]= useState("")
  const [password,setPassword]=useState("")
  // define 3 states for posting data 
  const [loading, setLoading]=useState("")
  const [success, setSuccess]=useState("")
  const [error, setError]=useState("")
  // function to handle submit 
  const handlesubmit=async (e) =>{
    e.preventDefault()
    setLoading("please wait...")
    // empty digital envelope 
    const formdata= new FormData()
    formdata.append("email" ,email)
    formdata.append("password" ,password)
    try{
      const response =await axios.post("http://higgs.alwaysdata.net/api/signin" ,formdata)
      setSuccess(response.data.message)
      setLoading("")
    }catch (error){
      setError(error.message)
        setLoading("");
        

    }
    
  }

  return (    
    <div className="row mt-2 justify-content-center">
      <div className='col-md-6 card shadow bg-dark text-success'>
        <h1><b><u>Signin</u></b></h1>
        {/* bind the states  */}
        <h2 className='text-danger'>{loading}</h2>
        <h2 className='text-info'>{success}</h2>
        <h2 className='text-dark'>{error}</h2>
        <form action="" onSubmit={handlesubmit}>
          <input type="email" placeholder='🧩Enter email' className='form-control' onChange= {(e) => setEmail (e.target.value)}/><br />
          <input type="password" placeholder='🪶Enter password' className='form-control' onChange={(e) =>setPassword (e.target.value)}/><br />
          <button type='submit' className='btn btn-success w-100'>signin</button>
          <p className='text-success'>Already have an account? <Link to="/Signup">Signup</Link></p>

        </form>

      </div>

    </div>
    


  )
}



export default Signin