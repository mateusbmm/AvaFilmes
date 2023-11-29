import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFilmes from "./Serviço";
import { FaStar } from "react-icons/fa";
import "./Home.css";
import Home from "./Home";

const Filmes = ({ showLink = true }) => {
  const filmes = useFilmes();
  const [idClicado, setIdClicado] = useState(Home.idClicado); // Usando useState para acessar o estado idClicado do componente Home

  return (
    <div>
      <h2>Filmes</h2>
      {filmes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {showLink && <Link to={`/`}>Ava Filmes</Link>}
          {filmes.map((filme) => (
            <div className="filmesHome" key={filme.id}>
              {filme.id === filme.id && <h4>{filme.nome}</h4>}
              {filme.id === filme.id && (
                <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />
              )}
              {filme.id === filme.id && <h4>{filme.descricao}</h4>}
              {filme.id === filme.id && (
                <p>
                  <FaStar /> {filme.avaliacao}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filmes;
