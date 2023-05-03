'use strict';

import restify from 'restify';
import sampleController from '#controllers/sampleController.js';

export default (app) => {
    app.get('/sample',
        restify.plugins.conditionalHandler([
            { 
                version: '1.0.0', 
                handler: [
                    getSamples
                ] 
            }
        ])
    );
}

async function getSamples(req, res, next) {
    return await sampleController.getSamples(req, res, next);
}