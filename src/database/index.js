'use strict';

import knex from 'knex';

var conn = {
  client: 'mssql',
  connection: {
    options: {
      encrypt: true,
      trustServerCertificate: true,
    },
    requestTimeout: 60000,
  },
  useNullAsDefault: true,
  debug: 'development'
}

export const db = knex(conn);

export default db;