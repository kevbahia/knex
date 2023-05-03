'use strict';

import app from '#src/app.js';

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server ready and listening on port ${PORT}.`);
});
