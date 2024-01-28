const validateId = (request, response, next) => {

    const { id } = request.body;

    if(id == undefined || id == null){
        return response.status(400).json({message: 'O ID deve ser informado!'});
    }

    if(id == ''){
        return response.status(400).json({message: 'O ID não pode ser vazio!'});
    }

    next();

};

const validateStatus  = (request, response, next) => {

    const { status } = request.body;

    if(status == undefined || status == null){
        return response.status(400).json({message: 'O status deve ser informado!'});
    }

    if(status == ''){
        return response.status(400).json({message: 'O status não pode ser vazio!'});
    }

    next();

};

const validateListId = (request, response, next) => {

    const { list_id } = request.body;

    if(list_id == undefined || list_id == null){
        return response.status(400).json({message: 'O ID da lista deve ser informado!'});
    }

    if(list_id == ''){
        return response.status(400).json({message: 'O ID da lista não pode ser vazio!'});
    }

    next();

};

const validateTitle = (request, response, next) => {

    const { title } = request.body;

    if(title == undefined || title == null){
        return response.status(400).json({message: 'O título deve ser informado!'});
    }

    if(title == ''){
        return response.status(400).json({message: 'O título não pode ser vazio!'});
    }

    next();

};


module.exports = {
    validateId,
    validateStatus,
    validateListId,
    validateTitle
}