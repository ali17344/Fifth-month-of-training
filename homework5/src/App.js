import React from 'react';
import {BrowserRouter,Routes, Route} from "react-router-dom"
import UserName from './page/UserName/UserName';
import {useDispatch} from 'react-redux'
import { get_user} from './redux/reducer';
import { useEffect } from 'react';
import UserInfo from './page/UserInfo/UserInfo';
const App = () => {
  const dispatch = useDispatch()
    useEffect(() => {
      dispatch(get_user())
    }, [dispatch]);
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserName />}/>
          <Route path='/user_info/:id' element={<UserInfo />}/>
        </Routes>
      </BrowserRouter>
    );
  }

 export default App;

