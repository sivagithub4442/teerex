import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Wishlist from './Pages/Wishlist';
import Header from './Components/Header'
function App() {
  return (
    <>
   <Header/>
     <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
      <Route path='/wishlist' element={<Wishlist/>}></Route>
     </Routes>
     
    </>
  );
}

export default App;