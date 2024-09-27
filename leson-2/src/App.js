import {BrowserRouter, Routes,  Route} from 'react-router-dom';
import Header from './Header';
import Header2 from './Header2';
import Page3 from './Page3';
import Page4 from './Page4';
import Card from './Card';
import Home from './Home';
import "./style.css"
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Header />}>
          <Route path='/' element={<Home />}/>
          <Route path='/card' element={<Card />}/>
        </Route>
        <Route>
        <Route path='/page3' element={<Header2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='/page4' element={<Page4 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
