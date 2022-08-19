import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Teams from '../database/models/Teams';

import { STATUS_SUCCESS } from '../utils/httpStatus';
import { MOCK_TEAM_BY_ID } from '../utils/mocks';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /teams/:id SUCCESSFUL requisition', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(Teams, "findOne")
      .resolves(MOCK_TEAM_BY_ID as Teams);
  });

  afterEach(()=>{
    (Teams.findOne as sinon.SinonStub).restore();
  })

  it('Returns a team By ID', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/1')
      .send();

    const result = chaiHttpResponse.body;
    const { status } = chaiHttpResponse;
    expect(result).to.deep.equals(MOCK_TEAM_BY_ID);
    expect(status).to.equals(STATUS_SUCCESS);
  });
});
