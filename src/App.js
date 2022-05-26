import React, { useContext, useEffect } from 'react';
import Router from './components/router/Router';
import { Token } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Url from './API/Url';
import Database from './API/Database';

const App = () => {
  const token = useContext(Token);

  console.log(Url.hashValue('access_token'))
  useEffect(() => {
    if (token) {
      window.location.hash = '';
      console.log(1)
    };
    // if (token != null && token != undefined) {
    //   Database.add('user', 'techInfo', token);
    //   console.log('Сохранение..')
    // };
    
  }, []);
  return (
    <Token.Provider value={Url.hashValue('access_token')}>
      <Router/>
    </Token.Provider>
  );
};

export default App;