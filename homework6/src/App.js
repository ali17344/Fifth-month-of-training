import axios from 'axios';
import { useState } from 'react';
import Post from './Post';
import Search from './Search';
function App() {
  const [data,setData] = useState([])
  
      axios('https://jsonplaceholder.typicode.com/posts').then(({data}) => {
        setData(data)})
  
  return (
    <div className="App">
      <Search data={data}/>   
      <Post data={data} />   
    </div>
  );
}

export default App;

