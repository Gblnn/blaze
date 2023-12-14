import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './pages/cart'
import CategoryPage from './pages/categorypage'
import BrowsePage from './pages/browsepage'


export default function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<CategoryPage/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/browse" element={<BrowsePage/>}/>
    </Routes>
    </BrowserRouter>
  )
}
 