import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './components/Admin';
import About from './components/About';
import Header from './Header';
import Login from './First Page/Login';
import Register from './First Page/Register';
import Blogcreate from './Admin page/Blogcreate';
import Blogedit from './Admin page/Blogedit';
import Blogview from './Admin page/Blogview';
import UserDetail from './User page/UserDetail';
import Userlist from './Admin page/Userlist';
import User from './Admin page/User';
import UserEdit from './Admin page/UserEdit';
import PasswordReset from './components/PasswordReset';
import ForgotPassword from './components/ForgotPassword';
import Errorpage from './components/Errorpage';

function App() {
  return (
    <div className="App" >
      <Routes>
           <Route path='/' element={ <Header/>}/>
           
           <Route path='/user' element={<UserDetail/>}/>
           <Route path='/userlist' element={<Userlist/>}/>
           <Route path='/user/view/:_id' element={<User/>} />
           <Route path='/user/edit/:_id' element={<UserEdit/>}/>
           
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
          
           <Route path="/home/edit/:_id" element={<Blogedit/>}/>
           <Route path="/home/view/:_id" element={<Blogview/>}/>
           
           <Route path='/home/*' element={<Home/>} />
          <Route path='/about' element={<About/>}/>
          
          <Route path="/create" element={<Blogcreate/>}/>

          <Route path='/password-reset' element={<PasswordReset/>}/>
          <Route path='/forgotpassword/:id/:token' element={<ForgotPassword/>}/>
          <Route path="/errorpage" element={<Errorpage/>} />
          
       </Routes> 
       
    </div>
  );
}

export default App;
