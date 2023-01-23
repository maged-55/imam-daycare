import {RegisterPage} from '../../pages/registerPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {LoginPage}from "../../pages/loginPage";
import BlogP from '../../pages/blogPage';
import ProtectedRoute from './protectedRouter'
import Desktop1 from '../../components/Desktop1'
import Footer from '../Footer';
import Home from '../Home';
import Addkid from '../../pages/addKid'


function router() {
  return (



  <><Routes>

      <Route path='/register' element={<RegisterPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/ra' element={<Desktop1 />} />
      <Route path='/' element={<Home />} />
      <Route path='/addkid' element={<Addkid />} />





      {/* <Route element={<ProtectedRoute/>}>
    <Route path='/' element={<BlogP />} />
    </Route> */}
    </Routes><Footer /></>

   
  )
}

export default router