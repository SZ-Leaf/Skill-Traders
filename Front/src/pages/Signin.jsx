import { useState } from "react";
import { useNavigate } from "react-router";


const Signin = () => {

   const [message, setMessage] = useState(null);
   const navigate = useNavigate();

   const handleLogin = async (event) => {
      event.preventDefault();

      const username = event.target.username.value;
      const password = event.target.password.value;

      const userLogin={
         username: username,
         password: password
      };

      try {
         const userLoginRequest = await fetch('/api/login', {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(userLogin),
         });
         const userLoginRequestData = await userLoginRequest.json();
         const token = userLoginRequestData.data;

         if(token){
            localStorage.setItem("jwt", token);
            setMessage('Login Successful');
            setTimeout(() =>{
               navigate('/dashboard');
            }, 2000);
         }else{
            setMessage('Invalid Username or Password.');
         }
      } catch (error) {
         setMessage('An error has occured, please try again.');
         console.error(error);
      }      

   }

   return(
      <>
         <h2>Login</h2>

         <form onSubmit={handleLogin}>

            <label>
               Username:
               <input type="text" name="username" id="" />
            </label>
            <label>
               Password:
               <input type="password" name="password" id="" />
            </label>
            <button className="btn" type="submit">Register</button>
         </form>
      </>
   )
}

export default Signin;