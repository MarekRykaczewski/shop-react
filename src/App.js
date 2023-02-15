import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from "./data"
import ItemDetail from './components/ItemDetail';
import React from 'react';

const items = data

function App() {

  const [cart, setCart] = React.useState([])

  function addToCart(item) {
    setCart(prevState => [...prevState, item])
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/shop" element={<Shop data={items}/>} />
          <Route path ='/cart' element={<Cart cart={cart}/>} />
          <Route path="/shop/:id" element={<ItemDetail handleClick={addToCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
