import './App.css';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import Header from './Component/Header/Header';
import Home from './pages/home/Home';
import Cart from './pages/cart/Cart';
import CategoryPage from './pages/CategoryPage/CategoryPage'
import DetailPage from './pages/DetailPage/DetailPage'
import {useDispatch} from 'react-redux'
import { get_categories } from './redux/reducer';
import { useEffect } from 'react';
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_categories())
  }, [dispatch]);

  return (
    <BrowserRouter>
     <Header />
     <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/category_page' element={<CategoryPage />} />
        <Route path='/product/:id' element={<DetailPage />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;

