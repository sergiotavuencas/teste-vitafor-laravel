import "./Login.css";

function Login() {
  return (
    <div className="Login">
      <form>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit">
            Sign in
          </button>
        </form>
    </div>
  );
}

export default Login;
