import { useEffect } from 'react';
import './App.css'
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

function App() {

  useEffect(() => {
    axios.get('/api/test')
      .then(response => {
        console.log(response.data.message);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  },[]); 

  return (
    <>
      <div>
        Hello world
      </div>
    </>
  );
}

export default App
