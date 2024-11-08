import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import "./CharacterDetail.css";

export default function CharacterDetail() {
  const { user, token } = useContext(AppContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    getCharacters();
  }, [id]);

  async function getCharacters() {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${id}`
    );
    if (response.ok) {
      const result = await response.json();
      setCharacterData(result);
    }
  }

  async function handleSave() {
    if (!user) {
      alert("Necessário estar logado para completar a ação.");
      return;
    }

    const response = await fetch("/api/characters", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_id: id,
        user_id: user.id,
        name: characterData.name,
        species: characterData.species,
        image: characterData.image,
        url: characterData.url,
        created_at: characterData.created,
      }),
    });

    if (response.status == 201) {
      navigate("/characters");
    } else if (response.status == 409) {
      alert("Personagem já está salvo.");
    } else {
      alert("Ocorreu um erro não identificado.");
    }
  }

  const renderPlaceholder = () => (
    <div className="details-container">
      <div className="details-placeholder">
        <div className="image-placeholder" />
        <div className="name-placeholder" />
        <div className="species-placeholder" />
      </div>
    </div>
  );

  const renderDetails = () => (
    <div className="container detail-content">
      <div className="row row-cols-auto">
        <div className="col">
          <img
            src={characterData.image}
            className="detail-image"
            alt={characterData.name}
          />
        </div>
        <div className="col mx-auto p-2">
          <div className="container text-center">
            <div className="row">
              <h3 className="edit-title">Detalhes do Personagem</h3>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <label className="detail-label">Nome: </label>
                <p className="detail-p">{characterData.name}</p>
              </div>
              <div className="row">
                <label className="detail-label">Espécie: </label>
                <p className="detail-p">{characterData.species}</p>
              </div>
            </div>
            <div className="col">
              <div className="row">
                <label className="detail-label">Genêro: </label>
                <p className="detail-p">{characterData.gender}</p>
              </div>
              <div className="row">
                <label className="detail-label">Localização: </label>
                <p className="detail-p">{characterData.location.name}</p>
              </div>
            </div>
          </div>
          <div className="col py-4 detail-btn-container">
            <a
              className="btn btn-outline-primary col-md-auto me-2 detail-btn-save"
              href={characterData.url}
              target="_blank"
            >
              Link
            </a>
            <button
              className="btn btn-outline-primary col-md-auto detail-btn-save"
              onClick={handleSave}
            >
              Salvar
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="CharacterDetail">
      {characterData ? renderDetails() : renderPlaceholder()}
    </div>
  );
}
