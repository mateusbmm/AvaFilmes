import useFilmes from "./Serviço";
import "../css/Home.css";

import { Link, useParams } from "react-router-dom"
import { FaStar } from "react-icons/fa"

// eslint-disable-next-line react/prop-types
const Home = ({ showLink = true }) => {
    const filmes = useFilmes();

    const { id } = useParams();
    let filme;
    filmes.forEach(element => {
        if (element.id == id) {
            filme = element;
        }
    });

    console.log(id)
    return (
        <div>
            <h1>Filmes</h1>
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
            )}
        </div>
    );
};

export default Home;
