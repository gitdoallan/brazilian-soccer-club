import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { STATUS_INTERNAL_SERVER_ERROR, STATUS_NOT_FOUND } from '../utils/httpStatus';
import { INVALID_TOKEN } from '../utils/mocks';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /login/validate FAILED requisition', () => {
  let chaiHttpResponse: Response;

  it('Token is not found', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/login/validate')
      .send();

    const { status } = chaiHttpResponse;
    expect(status).to.be.equal(STATUS_NOT_FOUND);
  });
});
