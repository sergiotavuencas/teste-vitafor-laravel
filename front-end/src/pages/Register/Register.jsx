import { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import "./Register.css";

export default function Register() {
  const { setToken } = useContext(AppContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  async function handleRegister(event) {
    event.preventDefault();

    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.status == 201) {
      localStorage.setItem("token", result.token);
      setToken(result.token);
      navigate("/");
    } else if (response.status == 422) {
      let error = result.errors.email[0];
      let message = "The email has already been taken.";

      if (error === message) alert("Email já cadastrado, utilize outro.");
    }
  }

  const renderForms = () => (
    <div className="form-signin w-100 m-auto">
      <h2 className="text-center py-4 register-title">Cadastro</h2>
      <form onSubmit={handleRegister}>
        <div className="py-1">
          <div className="form-floating">
            <input
              className="form-control"
              type="text"
              placeholder="john"
              required
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
            <label htmlFor="floatingInput">Nome</label>
          </div>
        </div>
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
              placeholder="Password"
              required
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
            <label htmlFor="floatingPassword">Senha</label>
          </div>
        </div>
        <div className="py-1">
          <div className="form-floating">
            <input
              className="form-control"
              type="password"
              placeholder="Password Confirmation"
              required
              value={formData.password_confirmation}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  password_confirmation: e.target.value,
                })
              }
            />
            <label htmlFor="floatingPassword">Confirmar Senha</label>
          </div>
        </div>
        <div className="py-4">
          <button className="btn btn-primary w-100 register-btn-register" type="submit">
            Cadastrar
          </button>
        </div>
      </form>
    </div>
  );

  return (
    <div className="Register">
      <div className="container register-forms-content">{renderForms()}</div>
    </div>
  );
}
