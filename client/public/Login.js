import React,{useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import toast from 'react-hot-toast';
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

    

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [auth,setAuth] = useAuth()
    // const [answer, setAnswer] = useState("");

    const navigate = useNavigate(); 

    // form function to stop default submit button and page refreshing
    const handleSubmit = async (e) =>{
        e.preventDefault();
        try {
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/login`,{
                email,password
            })
            if(res && res.data.success){
                toast.success(res.data.message);
                setAuth({
                  ...auth, 
                  user: res.data.user,
                  token: res.data.token,
                })
                localStorage.setItem('auth',JSON.stringify(res.data));
                navigate('/');
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
      <h1>Login</h1>
        <form  onSubmit={handleSubmit}>

         

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
            Login now
          </button>

        </form>
      </div>
    </Layout>
  )
}

export default Login;