const listMoldel = require('../model/listModel')

const getAll = async (req, res) => {
    console.log('listCOntroller - teste')
    const list = await listMoldel.getAll();
    return res.status(200).json(list);
}

const create = async (req, res) => {
    const createdfilme = await listMoldel.create(req.body)
    return res.status(201).json(req.body)
}

const deleteFilm = async (req, res) => {

    const { id } = req.params
    const deletefilm = await listMoldel.deleteFilm(id);
    return res.status(204).json({ message: `filme com o id:${id} deletado` })
}

const updateFilm = async (req, res) => {
    const { id } = req.params

    await listMoldel.updateFilm(id, req.body);
    return res.status(204).json();

}

module.exports = {
    getAll,
    create,
    deleteFilm,
    updateFilm
};