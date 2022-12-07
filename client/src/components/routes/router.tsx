import {RegisterPage} from '../../pages/registerPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage}from "../../pages/loginPage";
import BlogP from '../../pages/blogPage';
import ProtectedRoute from './protectedRouter'


function router() {
  return (

    <BrowserRouter>


  <Routes>
  
    <Route path='/register' element={<RegisterPage />} />
    <Route path='/login' element={<LoginPage />} />


    <Route element={<ProtectedRoute/>}>
    <Route path='/' element={<BlogP />} />
    </Route>
  </Routes>

</BrowserRouter>
   
  )
}

export default router