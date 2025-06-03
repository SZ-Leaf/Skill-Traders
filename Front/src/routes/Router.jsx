import {BrowserRouter, Routes, Route} from 'react-router';
import Homepage from '../pages/homepage';
import Signup from '../pages/Signup';

const Router =()=>{
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Homepage/>} />
            <Route path='/Signup' element={<Signup/>} />
         </Routes>
      </BrowserRouter>
   )
}

export default Router;