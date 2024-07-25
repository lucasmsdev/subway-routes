import request from 'supertest';
import express from 'express';
import { router } from '../routes';


const app = express();
app.use('/', router);

describe('GET /ping', () => {
  it('should return API is OK', async () => {
    const response = await request(app).get('/ping');
    expect(response.status).toBe(200);
    expect(response.text).toBe('API is OK');
  });
});
