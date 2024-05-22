import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navi from './components/Navi'
import Home from './pages/Home'
import RestrauratDetail from './pages/RestrauratDetail'
import DetailPage from './pages/DetailPage'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div>
        <React.StrictMode>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Navi/>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/resdetails' element={<RestrauratDetail/>}></Route>
                    <Route path='/cart' element={<Cart/>}></Route>
                    <Route path='details/:id' element={<DetailPage/>}></Route>

                </Route>
            </Routes>
            </BrowserRouter>
        </React.StrictMode>
    </div>
  )
}

export default App