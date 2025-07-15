import { useState } from "react";
import { Link, useNavigate } from "react-router";

const Signup = () => {
   
   const navigate = useNavigate();
   const [message, setMessage] = useState(null);
   
   const handleRegistration = async (event) => {
      event.preventDefault();

      const firstName = event.target.firstName.value;
      const lastName = event.target.lastName.value;
      const userName = event.target.userName.value;
      const email = event.target.email.value;
      const password = event.target.password.value;
      const confirmPassword = event.target.confirmPassword.value;

      const userRegistration ={
         firstName: firstName,
         lastName: lastName,
         userName: userName,
         email: email,
         password: password,
         confirmPassword: password,
      };

      if (password !== confirmPassword) {
         setMessage('Passwords do not match');
         return;
      }

      try{
         const userRegistrationResponse = await fetch('/api/register', {
            method: "POST",
            headers:{
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRegistration),
         });
         if(!userRegistrationResponse.ok){
            setMessage('Registration failed, please try again.')
            return;
         }

         setMessage('Registration successful ! Redirecting to login page...');
         setTimeout(() =>{
            navigate('/login');
         }, 2000);
      } catch (error) {
         setMessage('An error has occured. Please try again later.');
         console.error(error);
      }
   };
   
   return(
      <>
         <h2>Sign Up</h2>

         <form onSubmit={handleRegistration}>

               <label>
                  First Name:
                  <input type="text" name="firstName" />
               </label>
               <label>
                  Last Name:
                  <input type="text" name="lastName" />
               </label>
               <label>
                  UserName:
                  <input type="text" name="userName" />
               </label>
               <label>
                  Email:
                  <input type="email" name="email" />
               </label>
               <label>
                  Password:
                  <input type="password" name="password" />
               </label>
               <label>
                  Confirm Password:
                  <input type="password" name="confirmPassword" />
               </label>

               <button className="btn" type="submit">Register</button>
         </form>
      </>
   )
}

export default Signup;