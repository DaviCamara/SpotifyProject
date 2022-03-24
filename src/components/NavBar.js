
import React from 'react';
import { Link } from "react-router-dom";
import './NavBar.css'

const navbar = () => {
  return (
    <div className="navbar navbar-dark bg-dark">
      <img className='logo' src=" spotify-logo.png" alt="Logo" />
      <h1 className="nome-navbar">Spotify</h1>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="mynavbar">

            <ul class="navbar-nav me-auto">
              <li class="nav-item">
              <Link to="/home" className="nav-link">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/faq" className="nav-link">Faq</Link>
              </li>
              <li class="nav-item">
                <Link to="/cadastro" className="nav-link">Cadastro</Link>
              </li>

            </ul>

            <form class="d-flex">
              <input class="form-control me-2" type="text" placeholder="Artistas ou músicas"></input>
              <button class="btn btn-primary btn-success" type="button">Buscar</button>
            </form>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default navbar;