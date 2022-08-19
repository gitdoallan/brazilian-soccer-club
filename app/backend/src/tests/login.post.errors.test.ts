import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import { STATUS_BAD_REQUEST } from '../utils/httpStatus';
import { MSG_FIELDS_MISSING } from '../utils/returnedMessages';

import { app } from '../app';
import User from '../database/models/User';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

import { MOCK_USER_ADMIN } from '../utils/mocks';

describe('Endpoint /login FAILED requisition', () => {
  describe('Bad Request Errors', () => {
    let chaiHttpResponse: Response;

    it('E-mail cannot be empty', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: '', password: 'secret_admin' });
      const { message } = chaiHttpResponse.body;
      const { status } = chaiHttpResponse;
      expect(message).to.equal(MSG_FIELDS_MISSING);
      expect(status).to.equal(STATUS_BAD_REQUEST);
    });
    it('Password cannot be empty', async () => {
      chaiHttpResponse = await chai
        .request(app)
        .post('/login')
        .send({ email: 'admin@admin.com', password: '' });
      const { message } = chaiHttpResponse.body;
      const { status } = chaiHttpResponse;
      expect(message).to.equal(MSG_FIELDS_MISSING);
      expect(status).to.equal(STATUS_BAD_REQUEST);
    });
  });
});
