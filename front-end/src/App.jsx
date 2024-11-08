import { useContext } from "react";
import { AppContext } from "./context/AppContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout/Layout";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Characters from "./pages/Characters/Characters";
import About from "./pages/About/About";
import CharacterDetail from "./pages/CharacterDetail/CharacterDetail";
import CharacterEdit from "./pages/CharacterEdit/CharacterEdit";
import "./App.css";

export default function App() {
  const { user } = useContext(AppContext);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/register" element={user ? <Home /> : <Register />} />
            <Route path="/login" element={user ? <Home /> : <Login />} />
            <Route path="/characters" element={<Characters />} />
            <Route path="/about" element={<About />} />
            <Route path="/character/detail/:id" element={<CharacterDetail />} />
            <Route path="/character/edit/:id" element={<CharacterEdit />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
