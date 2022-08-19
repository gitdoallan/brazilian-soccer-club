import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { STATUS_SUCCESS } from '../utils/httpStatus';

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { MOCK_USER_ADMIN } from '../utils/mocks';

describe('Endpoint /login SUCCESSFUL requisition', () => {
  let chaiHttpResponse: Response;

  beforeEach(async () => {
    sinon
      .stub(User, "findOne")
      .resolves(MOCK_USER_ADMIN as User);
  });

  afterEach(()=>{
    (User.findOne as sinon.SinonStub).restore();
  })

  it('Token credentials are returned', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });
    const { token } = chaiHttpResponse.body;
    expect(token).to.be.a('string');
  });

  it('Status code is 200', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .post('/login')
      .send({ email: 'admin@admin.com', password: 'secret_admin' });
    const { status } = chaiHttpResponse;
    expect(status).to.be.equal(STATUS_SUCCESS);
  });
});
