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

      const userRegistration = {
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

      try {
         const userRegistrationResponse = await fetch('/api/register', {
            method: "POST",
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(userRegistration),
         });
         if (!userRegistrationResponse.ok) {
            setMessage('Registration failed, please try again.')
            return;
         }

         setMessage('Registration successful ! Redirecting to login page...');
         setTimeout(() => {
            navigate('/login');
         }, 2000);
      } catch (error) {
         setMessage('An error has occured. Please try again later.');
         console.error(error);
      }
   };

   return (
      <div className="w-full h-full items-center flex flex-col gap-5 justify-center">
         <h1 className="main-title">Skill Traders</h1>
         <h2 className="register-title">Register</h2>

         <form onSubmit={handleRegistration} className="form-style">

            <div className="label-div-container">
               <label htmlFor="firstname" className="label-style">
                  First Name:
               </label>
               <input type="text" name="firstName" id="firstname" className="input-style"/>
            </div>

            <div className="label-div-container">
               <label htmlFor="lastname" className="label-style">
                  Last Name:
               </label>
               <input type="text" name="lastName" id="lastname" className="input-style"/>
            </div>

            <div className="label-div-container">
               <label htmlFor="email" className="label-style">
                  Email:
               </label>
               <input type="email" name="email" id="email" className="input-style"/>
            </div>
            
            <div className="label-div-container">
               <label htmlFor="userName" className="label-style">
                  UserName:
               </label>
               <input type="text" name="userName" id="userName" className="input-style"/>
            </div>

            <div className="label-div-container">
               <label htmlFor="password" className="label-style">
                  Password:
               </label>
               <input type="password" name="password" id="password" className="input-style"/>
            </div>

            <div className="label-div-container">
               <label htmlFor="confirmPassword" className="label-style">
                  Confirm Pass:
               </label>
               <input type="password" name="confirmPassword" id="confirmPassword" className="input-style"/>
            </div>

            <button className="sign-up-btn w-30 self-center" type="submit">Sign Up</button>
         </form>
      </div>
   )
}

export default Signup;