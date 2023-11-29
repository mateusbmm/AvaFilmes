import useFilmes from "./Serviço";

import {Link} from "react-router-dom"
import {FaStar} from "react-icons/fa"

const CardFilmes = ({showLink = true}) => {
    const filmes = useFilmes();
    return(
        < className="Movies-Card">
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

export default CardFilmes;
