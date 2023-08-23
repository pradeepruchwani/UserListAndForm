import './App.css';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './component/Home';
import SignUp from './component/SignUp';
import Login from './component/Login';
import Header from './component/Header';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
     <Routes>
     <Route path='/' element={<Home/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/login' element={<Login/>}/>
     </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
