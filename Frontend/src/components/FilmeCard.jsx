import {Link} from "react-router-dom"
import {FaStar} from "react-icons/fa"

import useFilmes from "./Serviço";
import "./Home.css";

const FilmesCard = () => {
    const filmes = useFilmes();

    return (
                <div>
                    {filmes.map((filme) => (
                        <div className="filmesHome" key={filme.id}>Vingadores

                            <h2>{filme.nome}</h2>
                            <img src={filme.imagem} alt={`Imagem de ${filme.nome}`} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FilmesCard;