import { useEffect, useState } from "react";
import CharacterCard from "../../components/CharacterCard/CharacterCard";
import "./Characters.css";

export default function Characters() {
  const [nextPage, setNextPage] = useState(null);
  const [previousPage, setPreviousPage] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters();
  }, []);

  async function getCharacters(url) {
    if (url == null) {
      url = `/api/characters?page=1`;
    }
    const response = await fetch(url);
    if (response.ok) {
      const result = await response.json();
      setNextPage(result.info.next);
      setPreviousPage(result.info.prev);
      setCharacters(result.characters);
    }
  }

  async function handlePreviousPage() {
    getCharacters(previousPage);
  }

  async function handleNextPage() {
    getCharacters(nextPage);
  }

  const renderPlaceholder = () => (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          <div className="col">
            <div className="image-placeholder" />
            <div className="name-placeholder" />
            <div className="button-placeholder" />
          </div>
        </div>
      </div>
    </div>
  );

  const renderPreviousButton = () => (
    <button
      className="btn btn-outline-primary me-2 characters-btn-page"
      onClick={handlePreviousPage}
    >
      Anterior
    </button>
  );

  const renderNextButton = () => (
    <button
      className="btn btn-outline-primary me-2 characters-btn-page"
      onClick={handleNextPage}
    >
      Próxima
    </button>
  );

  const renderPagesButtons = () => (
    <div className="characters-actions">
      <div className="row">
        <div className="col">
          {previousPage ? renderPreviousButton() : <></>}
        </div>
        <div className="col-2" />
        <div className="col">{nextPage ? renderNextButton() : <></>}</div>
      </div>
    </div>
  );

  const renderCards = () => (
    <div className="album py-5">
      <div className="container">
        <div className="row g-3 row-cols-4 row-cols-sm-2 row-cols-md-4">
          {characters.map((character, key) => (
            <div className="col" key={key}>
              <CharacterCard
                id={character.api_id}
                name={character.name}
                image={character.image}
                from="/characters"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="Characters">
      <div className="container text-center characters-content">
        {previousPage ? (
          renderPagesButtons()
        ) : nextPage ? (
          renderPagesButtons()
        ) : (
          <></>
        )}
      </div>
      <div>{characters ? renderCards() : renderPlaceholder()}</div>
    </div>
  );
}
