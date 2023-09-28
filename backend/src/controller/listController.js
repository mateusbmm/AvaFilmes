const listMoldel = require('../model/listModel')

const getAll = async (req, res) => {
    console.log('listCOntroller - teste')
    const list = await listMoldel.getAll();
    return res.status(200).json(list);
}

module.exports = {
    getAll
};