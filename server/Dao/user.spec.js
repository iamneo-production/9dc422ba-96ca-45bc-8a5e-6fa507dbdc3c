const request = require('supertest');
const app = require('../index');
const mongoose = require('mongoose')

describe('User service test', () => {
    beforeAll(async () => {
        await mongoose.connect("mongodb+srv://ayush:ayush@cluster0.qrfvug8.mongodb.net/test");
    });

    afterAll(async () => {
        await mongoose.disconnect();
    });
    // describe('Testing for basic express server', () => {
    //     test('It should respond with 200 success', async () => {
    //         const response = await request(app).get('/')
    //             .expect('App is running');
    //         // console.log({ response }, "FHWBDBFKJADBASKDBAKSDBdksbdfkjbvkdfjbvkjfdbj");
    //     });
    // });


    describe('GET Request for getbyusername', () => {
        // describe('AUTH Not found case', () => {
        //     it('It should respond with 400', async () => {
        //         // const req = {
        //         //     username: "ayushbhai"
        //         // }
        //         const response = await request(app).get(`/api/user/getuserbyuserrwg/$ayushbhai`)
        //             .expect("bhbj");
        //     });
        // })
        describe('USER Not found case', () => {
            test('It should respond with 400', async () => {

                const response = await request(app).get(`/api/user/getuserbyuserrwg/ayushbhai`)
                    // .expect('Access denied. Authentication token not found.')
                    .expect(404);
            });
        })

    })
});