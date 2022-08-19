import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { STATUS_SUCCESS } from '../utils/httpStatus';
import { MOCK_TOKEN } from '../utils/mocks';

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /login/validate SUCCESSFUL requisition', () => {
  let chaiHttpResponse: Response;

  it('Token credentials are returned', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .set('Authorization', MOCK_TOKEN)
      .send();

    const { role } = chaiHttpResponse.body;
    const { status } = chaiHttpResponse;
    expect(status).to.be.equal(STATUS_SUCCESS);
    expect(role).to.equals('admin');
  });
});
