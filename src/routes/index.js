'use strict';

import restify from 'restify';

import sample from '#routes/sample.js';

export default (app) => {
  app.get('/',
    restify.plugins.conditionalHandler([
      { version: '1.0.0', handler: getIndex }
    ])
  );

  sample(app);
}

async function getIndex(req, res, next) {
  res.send(200, {
    name: 'package name',
    version: '1.0.0'
  });
  return next();
}