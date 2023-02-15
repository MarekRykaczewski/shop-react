import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import data from "./data"
import ItemDetail from './components/ItemDetail';

const items = data

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path ="/" element={<Home/>} />
          <Route path ="/shop" element={<Shop data={items}/>} />
          <Route path ='/cart' element={<Cart/>} />
          <Route path="/shop/:id" element={<ItemDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
