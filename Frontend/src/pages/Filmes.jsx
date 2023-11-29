import useFilmes from "./Serviço";
import "./Home.css";

import {Link} from "react-router-dom"
import {FaStar} from "react-icons/fa"

const Home = ({showLink = true}) => {
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
                            <p>
                                <FaStar/>{}{filme.avaliacao}
                            </p>
                            {showLink && <Link to ={`/Filmes/${filme.id}`}>Detalhes</Link>}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Home;