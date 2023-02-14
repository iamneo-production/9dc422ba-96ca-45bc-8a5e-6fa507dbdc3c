const request = require('supertest');
const app = require('./index');

describe('Testing for basic express server', () => {
    test('It should respond with 200 success', async () => {
        const response = await request(app).get('/')
            .expect('App is running');
        // console.log({ response }, "FHWBDBFKJADBASKDBAKSDBdksbdfkjbvkdfjbvkjfdbj");
    });
});