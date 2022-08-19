import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Matches from '../database/models/Matches';

import { STATUS_SUCCESS } from '../utils/httpStatus';
import { MOCK_MATCHES } from '../utils/mocks';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /matches SUCCESSFUL requisition', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Matches, "findAll")
      .resolves(MOCK_MATCHES as any);
  });

  afterEach(()=>{
    (Matches.findAll as sinon.SinonStub).restore();
  })

  it('Returns an array of matches', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches')
      .send();

    const result = chaiHttpResponse.body;
    const { status } = chaiHttpResponse;
    expect(result).to.deep.equals(MOCK_MATCHES);
    expect(status).to.equals(STATUS_SUCCESS);
  });
  it('Returns an array of matches in progress', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/matches?inProgress=true')
      .send();
    const { status } = chaiHttpResponse;
    expect(status).to.equals(STATUS_SUCCESS);
  });
});
