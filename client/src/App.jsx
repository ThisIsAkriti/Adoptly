import { useEffect } from 'react';
import './App.css'
import axios from 'axios';
import {Routes , Route, BrowserRouter} from 'react-router-dom';
import Body from './components/Body';
import AuthPage from './components/AuthPage';
import Home from './components/Home';

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
      <BrowserRouter basename='/'>
        <Routes>
          <Route path = '/' element = {<Body/>}>
            <Route path='/auth' element={<AuthPage />} />
            <Route path='/home' element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
