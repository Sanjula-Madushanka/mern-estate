import { BrowserRouter ,Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Profile from "./Pages/Profile";
import SignIn from "./Pages/SignIn";
import About from "./Pages/About";

export default function App(){
  return<BrowserRouter>
<Routes>
  <Route path='/' element={<Home/>} />
  <Route path='/signin' element={<SignIn/>} />
  <Route path='/signup' element={<SignUp/>} />
  <Route path='/profile' element={<Profile/>} />
  <Route path='/about' element={<About/>} />

</Routes>
  
  </BrowserRouter>
}