import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./CharacterCard.css";

export default function CharacterCard({ id, name, image, from }) {
  const navigate = useNavigate();
  const [cardStyle, setCardStyle] = useState();
  const [buttonStyle, setButtonStyle] = useState();

  useEffect(() => {
    if (from === "/home") {
      setCardStyle("home-card");
      setButtonStyle("home-btn-details");
    } else if (from === "/characters") {
      setCardStyle("characters-card");
      setButtonStyle("characters-btn-details");
    }
  }, []);

  function handleRedirect() {
    if (from === "/home") navigate(`/character/detail/${id}`);
    else if (from === "/characters") navigate(`/character/edit/${id}`);
  }

  return (
    <div className="CharacterCard">
      <div className={`card shadow-sm ${cardStyle}`}>
        <div className="row justify-content-md-center">
          <img
            className="col-md-auto card-image"
            src={image}
            alt={`${name} image`}
          />
        </div>
        <div className="card-body">
          <div className="row justify-content-md-center">
            <p className="col-md-auto card-name">{name}</p>
          </div>
          <div className="row justify-content-md-center">
            <button
              className={`btn btn-outline-primary col-md-auto ${buttonStyle}`}
              onClick={handleRedirect}
            >
              Detalhes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
