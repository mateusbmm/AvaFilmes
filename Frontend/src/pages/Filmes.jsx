import React, { useState } from "react";
import useFilmes from "./Serviço";
import "../css/Home.css";
import { Link, useParams } from "react-router-dom"
import Home from "./Home";


const Filmes = ({ showLink = true }) => {
  const filmes = useFilmes();
  const [idClicado, setIdClicado] = useState(Home.idClicado); // Usando useState para acessar o estado idClicado do componente Home

  
    const { id } = useParams();
    let filme;
    filmes.forEach(element => {
        if (element.id == id) {
            filme = element;
        }
    });
  
  return (
    <div>
      <h2>Filmes</h2>
      {filmes.length === 0 ? (
        <p>Carregando...</p>
      ) : (
          <div>

                    <div className="filmesHome large" key={filme.id}>
                        <h2>{filme.nome}</h2>

                        <div className="content">
                            <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />

                            <div className="contentText">
                                <p>{filme.descricao}</p>
                                    <p>
                                        Nota: <FaStar />{ }{filme.avaliacao}
                                    </p>
                            </div>
                                
                        </div>
                       
                    </div>

                </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filmes;
