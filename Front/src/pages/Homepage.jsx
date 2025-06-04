import { Link } from "react-router";

const Homepage = () =>{
   return(
      <main>
         <h1>Skill Traders</h1>
         <p>Trade skills, not money.</p>

         <div>
            <Link to='/login'>Login</Link>
            <br/>
            <Link to='/signup'>Signup</Link>
         </div>
      </main>
   )
}

export default Homepage;