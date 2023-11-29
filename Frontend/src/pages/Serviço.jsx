import { useState, useEffect } from "react";
import axios from "axios";

const useFilmes = () => {
    const [filmes, setFilmes] = useState([]);

    const getFilmes = async () => {
        try {
            const response = await axios.get("http://localhost:3333/filmes");
            const data = response.data;
            setFilmes(data);
        } catch (error) {
            console.log("Erro na API");
        }
    };

    useEffect(() => {
        getFilmes();
    }, []);

    return filmes;
};

export default useFilmes;
