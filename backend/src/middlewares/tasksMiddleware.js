const validateBody = (req, res, next) => {
    const {body} = req;

    if (body.nome === undefined){
        return res.status(400).json('O campo "nome" é obrigatório!');
    }

    if (body.nome === ''){
        return res.status(400).json('O campo "nome" não pode ser vazio!')
    }

    next();
}

module.exports = {
    validateBody,
    
}