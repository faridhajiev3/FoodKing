import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Principle from './Components/Principle/Principle';
import Category from './Components/Category/Category';
import Meal from './Components/TodaysMeal/Meal';
import Favorite from './Components/Favorite/Favorite';
import Orders from './Components/Orders/Orders';
import Account from './Components/Account/Account';
import Cart from './Components/Cart/Cart';
import FoodContextProvider from './Context/GlobalState';
import Read from './Components/Read/Read';

function App() {

  return (
    <FoodContextProvider>
    <Router>
      <Routes>
        <Route path='/' element={<Principle/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/meal' element={<Meal/>}/>
        <Route path='/favorite' element={<Favorite/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/read/:id' element={<Read/>}/>
      </Routes>
    </Router>
    </FoodContextProvider>
  )
}

export default App
