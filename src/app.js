import restify from 'restify';

import routes from '#routes/index.js';

const app = restify.createServer({
  ignoreTrailingSlash: true
});

const corsAllowedMethods = ['GET', 'POST', 'PUT', 'DELETE'];
const corsAllowedHeaders = ['Content-Type', 'Authorization', 'Request-Id', 'Request-Context', 'traceparent'];
app.pre((req, res, next) => {
  res.header('access-control-allow-origin', '*');

  if (req.method == 'OPTIONS') {
    res.header('access-control-allow-methods', corsAllowedMethods.join(','));
    res.header('access-control-allow-headers', corsAllowedHeaders.join(','));
    return res.send(200);
  }

  return next();
});

app.use(restify.plugins.acceptParser(app.acceptable));
app.use(restify.plugins.bodyParser());
app.use(restify.plugins.queryParser());
app.use(restify.plugins.gzipResponse());

app.on('restifyError', (req, res, err, cb) => {
  if (err) {
    console.error(err.name, err);
    res.send(500);
  }

  return cb();
});

routes(app);

export default app;