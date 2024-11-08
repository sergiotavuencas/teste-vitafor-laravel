import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate, useParams } from "react-router-dom";
import "./CharacterEdit.css";

export default function CharacterEdit() {
  const { user, token } = useContext(AppContext);
  const { api, id } = useParams();
  const navigate = useNavigate();
  const [characterData, setCharacterData] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    species: "",
    image: "",
    url: "",
  });
  const url = `/api/characters/${id}`;

  useEffect(() => {
    getCharacters();
  }, [id]);

  useEffect(() => {
    if (characterData) {
      setFormData({
        name: characterData.name || "",
        species: characterData.species || "",
        image: characterData.image || "",
        url: characterData.url || "",
      });
    }
  }, [characterData]);

  async function getCharacters() {
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      setCharacterData(result.character);
    }
  }

  async function handleDelete() {
    if (!user) {
      alert("Necessário estar logado para completar a ação.");
      return;
    }

    const response = await fetch(`/api/characters/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.ok) {
      alert("Personagem deletado com sucesso!");
      navigate("/characters");
    } else {
      alert("Ocorreu um erro não identificado.");
    }
  }

  async function handleUpdate(event) {
    event.preventDefault();

    if (!user) {
      alert("Necessário estar logado para completar a ação.");
      return;
    }

    const response = await fetch(`/api/characters/${id}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      const result = await response.json();
      setCharacterData(result.character);
      alert("Dados atualizados com sucesso!");
    } else {
      alert("Falha ao atualizar os dados.");
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

  const renderForms = () => (
    <div className="container edit-content">
      <div className="row row-cols-auto">
        <div className="col">
          <img
            src={characterData.image}
            className="edit-image"
            alt={characterData.name}
          />
        </div>
        <div className="col mx-auto p-2">
          <div className="container text-center">
            <div className="row">
              <h3 className="edit-title">Detalhes do Personagem</h3>
            </div>
          </div>
          <form onSubmit={handleUpdate}>
            <div className="py-1">
              <div className="form-floating row">
                <input
                  className="form-control"
                  type="text"
                  placeholder={characterData.name}
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
                <label className="edit">Nome</label>
              </div>
            </div>
            <div className="py-4">
              <div className="form-floating row">
                <input
                  className="form-control"
                  type="text"
                  placeholder={characterData.species}
                  required
                  value={formData.species}
                  onChange={(e) =>
                    setFormData({ ...formData, species: e.target.value })
                  }
                />
                <label className="edit">Espécie</label>
              </div>
            </div>
            <div className="row py-4 edit-btn-container">
              <button
                className="btn btn-outline-primary me-2 edit-btn-update"
                type="submit"
              >
                Atualizar
              </button>
              <button
                className="btn btn-outline-primary edit-btn-delete"
                type="button"
                onClick={handleDelete}
              >
                Deletar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div className="CharacterEdit">
      {characterData ? renderForms() : renderPlaceholder()}
    </div>
  );
}
