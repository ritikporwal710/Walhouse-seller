import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";

const Register = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setPhone] = useState("");
    const [address,setAddress] = useState(""); 
    // const [answer, setAnswer] = useState("");

    const navigate = useNavigate(); 

    // form function to stop default submit button and page refreshing
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/register`,{
                name,email,password,phone,address
            })
            if(res && res.data.success){
                toast.success(res.data.message);
                navigate('/login');
            }
            else{
                toast.error(res.data.message);
            }
            
        } 
        catch (error) {
            console.log(error);
            toast.error('Something went wrong');
        }
        // console.log(name,email,password,phone,address);
        // toast.success('Register Successfully');
    };

  return (
    <Layout title={"register here"}>
      <div className="form-container">
      <h1>Register</h1>
        <form  onSubmit={handleSubmit}>

          <div className="inputsize mb-3">
            <label htmlFor="exampleInputName1" className="form-label">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className="form-control"
              id="exampleInputName1"
              placeholder="First and last name"
              required
              autoFocus
            />
          </div>

          <div className="inputsize mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Your email"
              required
            />
          </div>

          
          <div className="inputsize mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Your password"
              required
            />
          </div>

          <div className="inputsize mb-3">
            <label htmlFor="exampleInputPhone1" className="form-label">
              Phone
            </label>
            <input
              type="text"
              value={phone}
              onChange={(e)=>setPhone(e.target.value)}
              className="form-control"
              id="exampleInputPhone1"
              placeholder="Your phone No."
              required
            />
          </div>

          <div className="inputsize mb-3">
            <label htmlFor="exampleInputAddress1" className="form-label">
              Address
            </label>
            <input
              type="text"
              value={address}
              onChange={(e)=>setAddress(e.target.value)}
              className="form-control"
              id="exampleInputAddress1"
              placeholder="Your address"
              required
            />
          </div>

          {/* <div className="inputsize mb-3">
            <label htmlFor="exampleInputAddress1" className="form-label">
              Role
            </label>
            <input
              type="text"
              value={answer}
              onChange={(e)=>setAnswer(e.target.value)}
              className="form-control"
              id="exampleInputAnswer1"
              placeholder="Your role"
              required
            />
          </div> */}

          <button type="submit" className="btn btn-primary  ">
            Register Here
          </button>

        </form>
      </div>
    </Layout>
  );
};

export default Register;
