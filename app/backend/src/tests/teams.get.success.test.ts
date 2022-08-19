import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Teams from '../database/models/Teams';

import { STATUS_SUCCESS } from '../utils/httpStatus';
import { MOCK_TEAMS } from '../utils/mocks';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /teams SUCCESSFUL requisition', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Teams, "findAll")
      .resolves(MOCK_TEAMS as Teams[]);
  });

  afterEach(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
  })

  it('Returns an array of teams', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams')
      .send();

    const result = chaiHttpResponse.body;
    const { status } = chaiHttpResponse;
    expect(result).to.deep.equals(MOCK_TEAMS);
    expect(status).to.equals(STATUS_SUCCESS);
  });
});
