import {BrowserRouter, Routes, Route} from 'react-router';
import {Signup, Dashboard, Signin, Homepage} from '../pages'
import { Suspense } from 'react';


const Router =()=>{
   return(
      <Suspense fallback={<div>Loading...</div>}>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Homepage/>} />
               <Route path='/signup' element={<Signup/>} />
               <Route path='/login' element={<Signin/>} />
               <Route path='/dashboard' element={<Dashboard/>} />
            </Routes>
         </BrowserRouter>
      </Suspense>
   )
}

export default Router;