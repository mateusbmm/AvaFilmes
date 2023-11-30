const connection = require('./connection')

const getAll = async () => {
    const [listMovies, buffer] = await connection.execute('SELECT * FROM filmes');
    console.log(listMovies)
    return listMovies;
}

const create = async (filme) => {

    const { nome, imagem, descricao, avaliacao } = filme
    //console.log(nome)

    const [createdfilme] = await connection.execute('INSERT INTO `filmes`( `nome`, `imagem`, `descricao`, `avaliacao`) VALUES (?,?,?,?)', [nome, imagem, descricao, avaliacao])
    return createdfilme
}

const deleteFilm = async (id) => {
    console.log(id)
    const [deletedfilme] = await connection.execute('DELETE FROM `filmes` WHERE `id` = ?', [id]);
    return [deletedfilme]
}


const updateFilm = async (id, filme) => {
    //console.log(id)
    const { nome,imagem, descricao, avaliacao} = filme
    const [updatedfilm] = await connection.execute('UPDATE `filmes` SET `nome`=?,`imagem`=?,`descricao`=?,`avaliacao`=? WHERE id = ?', [nome,imagem, descricao, avaliacao,id]);

    

    return [updatedfilm]
}


module.exports = {
    getAll,
    create,
    deleteFilm,
    updateFilm

};