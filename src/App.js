import React from "react";
import { render } from "react-dom";

import './App.css';
import NavBar from './Components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css'
import Movies from './Pages/Movies/Movies';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import MovieDetails from './Pages/Movies/MovieDetails';
import Login from './Pages/Login/Login';
import Favorites from './Pages/Movies/Favorites';
import { useSelector } from 'react-redux';
import Register from './Pages/Register/Register';

function App() {

  const lang = useSelector((state)=>state.language.lang)

  return (
    <BrowserRouter>
    <div dir={lang === 'Ar'? 'rtl':'ltr'} >
      <NavBar />
        <Switch>
          <Route path = '/login' component={Login} exact/>
          <Route path = '/register' component={Register} exact/>
          <Route path = '/movies' component={Movies} exact/>
          <Route path = '/movie/:id?' component={MovieDetails} exact/>
          <Route path = '/favorites' component={Favorites} exact/>
        </Switch>
    </div>
     
    </BrowserRouter>
  );
}

export default App;
