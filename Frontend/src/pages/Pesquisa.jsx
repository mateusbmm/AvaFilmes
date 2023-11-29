//import React from "react";
import useFilmes from "./Serviço";
import "./Home.css";

const Home = () => {
    const filmes = useFilmes();

    return (
        <div>
            <h1>Filmes</h1>
            {filmes.length === 0 ? (
                <p>Carregando...</p>
            ) : (
                <div>
                    {filmes.map((filme) => (
                        <div className="filmesHome" key={filme.id}>
                            <h2>{filme.nome}</h2>
                            <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />
                            <h4>{filme.descricao}</h4>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;
