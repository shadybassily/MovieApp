import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import './NavBar.css'
export default function NavBar() {
  //favorite movies
  const counter = useSelector((state)=> state.counter.counter)
  
  
  return ( 
    <ul className="nav bg-dark">
      <li className="nav-item">
        <Link className="nav-link " aria-current="page" to="/movies">
          Movies
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/favorites">
          Favorites {counter !== 0 && counter}
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/register">
          Register
        </Link>
      </li>
      <ChangeLanguage />
    </ul>
  );
}
