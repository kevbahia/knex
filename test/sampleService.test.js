import { jest } from '@jest/globals';
import {db} from '../../../src/database/index.js';
import knex from 'knex';
import { createTracker, MockClient } from 'knex-mock-client';

jest.mock('../../../src/database/index.js', () => {
  return {
    db: knex({client: MockClient}),
  };
});

describe('sample service', () => {    
  let tracker;

  beforeAll(() => {
    tracker = createTracker(db);
  });

  it('should pass with valid data', async () => {
  })
})

