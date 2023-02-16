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
    if (isItemInCart(item) === false) {
      setCart(prevState => [...prevState, {...item, quantity: 1}])
    } else if (isItemInCart(item)) {
      incrementItem(item)
    }
  }

  function isItemInCart(item) {
    return cart.find(obj => {
      return obj.id === item.id
    }) ? true : false}


  function incrementItem(item) {
    let newCart = [...cart]
    let itemToIncrement = newCart.find(obj => {
      return obj.id === item.id
    })
    itemToIncrement.quantity++
    setCart(prevState => [...newCart])
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/shop" element={<Shop data={items}/>} />
          <Route path ='/cart' element={<Cart cart={cart} handleIncrementClick={incrementItem}/>} />
          <Route path="/shop/:id" element={<ItemDetail handleClick={addToCart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
