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
import Blogdelete from './Admin page/Blogdelete';
import UserDetail from './User page/UserDetail';
import Userlist from './Admin page/Userlist';
import User from './Admin page/User';

function App() {
  return (
    <div className="App" style={{ backgroundImage: `url("https://wallpaperset.com/w/full/e/c/a/67435.jpg")`}}>
      <Routes>
        {/* <Route path='/admin' element={<Admin/>}/> */}
           <Route path='/' element={ <Header/>}/>
           <Route path='/user' element={<UserDetail/>}/>
           <Route path='userlist' element={<Userlist/>}/>
           <Route path='/user/view/:id' element={<User/>} />
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           <Route path="/home/edit/:blogid" element={<Blogedit/>}/>
           <Route path="/home/view/:blogid" element={<Blogview/>}/>
            <Route path="/home/delete/:blogid" element={<Blogdelete/>}/>
           
           <Route path='/home/*' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path="/create" element={<Blogcreate/>}/>
       </Routes> 
       
    </div>
  );
}

export default App;
