import * as sinon from 'sinon';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');

import Teams from '../database/models/Teams';

import { STATUS_NOT_FOUND } from '../utils/httpStatus';
import { MSG_TEAM_NOT_FOUND } from '../utils/returnedMessages';

import { app } from '../app';

import { Response } from 'superagent';

chai.use(chaiHttp);

const { expect } = chai;

describe('Endpoint /teams/:id FAILED requisition', () => {
  let chaiHttpResponse: Response;

  it('Returns an error when entered an invalid ID', async () => {
    chaiHttpResponse = await chai
      .request(app)
      .get('/teams/999')
      .send();

    const { status } = chaiHttpResponse;
    const { message } = chaiHttpResponse.body;

    expect(message).to.equals(MSG_TEAM_NOT_FOUND);
    expect(status).to.equals(STATUS_NOT_FOUND);
  });
});
