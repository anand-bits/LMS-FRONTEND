import './App.css';

import { Route, Routes } from 'react-router-dom';

import RequireAuth from './Components/Auth/RequireAuth';
import CourseList from './Course/CourseList';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';
import CourseDescription from './Pages/CourseDescription';
import Denied from './Pages/Denied';
import HomePage from './Pages/HomePage'
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import SignUp from './Pages/SignUp';

function App() {
  return (
    <>
    <Routes>

      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/about' element={<AboutUs/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path='/courses' element={<CourseList/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/denied' element={<Denied/>}></Route>
      <Route path='/course/description' element={<CourseDescription/>}></Route>
      <Route element={<RequireAuth allowedRoles={["ADMIN"]}/>}></Route>
      
      <Route path='*' element={<NotFound/>}></Route>
     


    </Routes>

    </>
  );
}

export default App;
