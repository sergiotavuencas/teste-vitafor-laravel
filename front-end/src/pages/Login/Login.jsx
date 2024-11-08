import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  async function handleRegister(event) {
    event.preventDefault();

    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.status == 200) {
      localStorage.setItem("token", result.token);
      setToken(result.token);
      navigate("/");
    } else if (response.status == 401) {
      alert("Credenciais inválidas, verifique os valores inseridos.");
    }
  }

  const renderForms = () => (
    <div className="form-signin w-100 m-auto">
      <h2 className="text-center py-4 login-title">Login</h2>
      <form onSubmit={handleRegister}>
        <div className="py-1">
          <div className="form-floating">
            <input
              className="form-control"
              type="email"
              placeholder="name@example.com"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
            <label htmlFor="floatingInput">Email</label>
          </div>
        </div>
        <div className="py-1">
          <div className="form-floating">
            <input
              className="form-control"
              type="password"
              placeholder="Senha"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
        </div>

        <div className="py-4">
          <button className="btn btn-primary w-100 py-2 login-btn" type="submit">
            Entrar
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="Login">
      <div className="container login-forms-content">{renderForms()}</div>
    </div>
  );
}
