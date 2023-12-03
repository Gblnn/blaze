import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Home/>}/>
      <Route index path="/cart" element={<Cart/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
