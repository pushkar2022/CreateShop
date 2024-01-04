import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import LoginSignup from './Pages/LoginSignup'
import Cart from './Pages/Cart'
import Curd from './CurdOpertion/curd'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="/mens" element={<ShopCategory category="men"/>}/>
        <Route path="/womens" element={<ShopCategory category="womens"/>}/>
        <Route path="/kid" element={<ShopCategory category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart'element={<Cart/>}/>
        <Route path='/login' element={<LoginSignup/>}/>
        <Route path='/curd' element={<Curd/>}/>


      </Routes>
      
      </BrowserRouter>

    </div>
  )
}

export default App