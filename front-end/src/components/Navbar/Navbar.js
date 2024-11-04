import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="Navbar">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
        <div className="col-md-3 mb-2 mb-md-0">
          {/* <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none" >
              <svg className="bi" width="40" height="32" role="img" aria-label="Bootstrap"><use xlink:href="#bootstrap"></use></svg>
            </a> */}
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary">
              Home
            </Link>
            {/* <a href="#" className="nav-link px-2 link-secondary">Home</a> */}
          </li>
          <li>
            <Link to="/characters" className="nav-link px-2 link-secondary">
              Personagens
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2 link-secondary">
              Sobre
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login" className="btn btn-outline-primary me-2">
            Entrar
          </Link>
          <Link to="/register" className="btn btn-primary">
            Cadastrar
          </Link>
          {/* <button type="button" className="btn btn-outline-primary me-2">
            Login
          </button> */}
          {/* <button type="button" className="btn btn-primary">
            Sign-up
          </button> */}
        </div>
      </header>
    </div>
  );
}

export default Navbar;
