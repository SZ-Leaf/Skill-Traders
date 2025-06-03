import {BrowserRouter, Routes, Route} from 'react-router';
import Homepage from '../pages/homepage';
import Signup from '../pages/Signup';
import Signin from '../pages/Signin';

const Router =()=>{
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Signup' element={<Signup/>} />
            <Route path='/Signin' element={<Signin/>} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router;