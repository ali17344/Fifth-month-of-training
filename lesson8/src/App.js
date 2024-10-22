import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './Header'
import Home from './Home';
import Page from './Page';
import './style.css'
import Products from './Products';
function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/page' element={<Page />}/>
        <Route path='/products/:params' element={<Products />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
