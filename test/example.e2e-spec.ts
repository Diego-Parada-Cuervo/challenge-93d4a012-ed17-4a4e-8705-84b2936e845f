import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';

describe('ExampleController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/example (GET)', async () => {
    const response = await request(app.getHttpServer()).get('/example');
    expect(response.status).toBe(200);
  });

  it('/example (POST)', async () => {
    const response = await request(app.getHttpServer()).post('/example').send({ name: 'Test' });
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('Test');
  });
});