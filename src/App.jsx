import { Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import ProductIdPage from './pages/ProductIdPage'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import CartPage from './pages/CartPage'
import PurchasesPage from './pages/PurchasesPage'

function App() {

  return (
        <div>
          <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/products/:id' element={<ProductIdPage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
            <Route path='/cart' element={<CartPage/>}/>
            <Route path='/purchases' element={<PurchasesPage/>}/>
          </Routes>
        </div>
  )
}

export default App

//npm i axios react-touter-dom react-redux @reduxjs/toolkit