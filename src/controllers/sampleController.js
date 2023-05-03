import errors from 'restify-errors';
import sampleService from '#services/sampleService.js';

const getSamples = async (req, res, next) => {
    let result;

    try {
        result = await sampleService.getSamples();
    }
    catch (err) {
        return next(new errors.InternalError(err));
    }

    res.send(200, result);
    return next();
}

const sampleController = {
    getSamples
}

export default sampleController;