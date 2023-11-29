import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie } from "react-icons/bi"; // Importe o ícone BiCameraMovie
import {FaStar} from "react-icons/fa"

import useFilmes from "../pages/Serviço";

const Pesquisa = () => {
  const [busca, setBusca] = useState('');
  const navigate = useNavigate();

  const filmes = useFilmes();
  const filmesFiltrados = filmes.filter((filme) => 
    filme.nome.toLowerCase().includes(busca.toLowerCase())
  );

  console.log(filmesFiltrados); // Mova o console.log para fora do retorno do componente

  const handleSubmit = (event) => {
    event.preventDefault();
    // Adicione aqui a navegação, por exemplo:
    // navigate(`/search?q=${busca}`);
  };

  return (
    <nav id="navbar">
      <h2>
        {/* Importe o Link do react-router-dom */}
        <Link to="/">
          <BiCameraMovie /> Ava Filmes
        </Link>
      </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(ev) => setBusca(ev.target.value)}
          value={busca}
        />
        <div className="filmesHome">
          {filmesFiltrados.map((filme) => (
            <div key={filme.id}>
              <h2>{filme.nome}</h2>
              <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />
              <p>
              <FaStar/>{}{filme.avaliacao}
              </p>
             
            </div>
          ))}
        </div>
      </form>
    </nav>
  );
};

export default Pesquisa;
