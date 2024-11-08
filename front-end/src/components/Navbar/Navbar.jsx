import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/rick-and-morty.svg";
import "./Navbar.css";

export default function Navbar() {
  const { user, token, setUser, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  async function handleLogout(event) {
    event.preventDefault();

    const response = await fetch("/api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const data = await response.json();

    if (response.ok) {
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate("/");
    }
  }

  return (
    <div className="Navbar">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between">
        <div className="col-md-3 mb-2 mb-md-0">
          <a
            href="/"
            className="d-inline-flex link-body-emphasis text-decoration-none logo"
          >
            <img src={logo} className="img-thumbnail" />
          </a>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/characters" className="nav-link px-2 link">
              Personagens
            </Link>
          </li>
          <li>
            <Link to="/about" className="nav-link px-2 link">
              Sobre
            </Link>
          </li>
        </ul>

        {user ? (
          <div className="col-md-3 text-end">
            <h2 className="btn btn-outline-primary me-2 user-name">
              Bem vindo, {user.name}
            </h2>
            <button className="btn btn-primary me-2 btn-logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="col-md-3 text-end">
            <Link to="/register" className="btn btn-outline-primary me-2 btn-register">
              Cadastrar
            </Link>
            <Link to="/login" className="btn btn-primary me-2 btn-login">
              Entrar
            </Link>
          </div>
        )}
      </header>
    </div>
  );
}
