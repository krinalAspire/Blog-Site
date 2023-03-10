import './App.css';
import { Route, Routes} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Header from './Header';
import Login from './First Page/Login';
import Register from './First Page/Register';


function App() {
  return (
    <div className="App" style={{ backgroundImage: `url("https://wallpaperset.com/w/full/e/c/a/67435.jpg")`, height: 600 }}>
        <Header/>
      <Routes>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
       </Routes> 
       
    </div>
  );
}

export default App;
