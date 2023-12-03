import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import CategoryPage from './pages/categorypage'

export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/cart" element={<Cart/>}/>
      <Route index path="/category" element={<CategoryPage category_name=""/>}/>
    </Routes>
    </BrowserRouter>
  )
}
