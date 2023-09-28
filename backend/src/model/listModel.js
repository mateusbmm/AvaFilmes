const connection = require('./connection')

const getAll = async () => {
    const [listMovies, buffer] = await connection.execute('SELECT * FROM filmes');
    console.log(listMovies)
    return listMovies;
}

module.exports = {
    getAll
};