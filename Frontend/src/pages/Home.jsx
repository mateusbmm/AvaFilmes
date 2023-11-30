import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFilmes from "./Serviço";
import { FaStar } from "react-icons/fa";
import "../css/Home.css";

const Home = ({ showLink = true }) => {
  const filmes = useFilmes();
  const [idClicado, setIdClicado] = useState(null);

  const handleClick = (id) => {
    setIdClicado(id);
  };

  return (
    <div>
      <h1>Ava Filmes</h1>
      {showLink && <Link to={`/pesquisa`}>Pesquisar</Link>}
      <h1>Filmes</h1>
      {filmes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <div>

          {filmes.map((filme) => (
            <div className="filmesHome" key={filme.id}>
              <h2>{filme.nome}</h2>
              <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />
              <p>
                <FaStar />
                {filme.avaliacao}
              </p>
              {showLink && (
                <Link
                  to={`/filmes/${filme.id}`}
                  onClick={() => handleClick(filme.id)}
                >
                  Detalhes
                </Link>
              )}
              {idClicado === filme.id && (
                <div>
                  <h3>Descrição</h3>
                  <p>{filme.descricao}</p>

                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
