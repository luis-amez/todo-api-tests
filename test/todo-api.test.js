const chai = require('chai');
const expect = chai.expect;
const supertest = require('supertest');

const apiUrl = supertest('http://todos.demo.rootpath.io')

describe('GET /todos', function() {
  it('returns an array of todos', function() {
    return apiUrl
      .get('/todos')
      .expect(200)
      .then((response) => {
        expect(response.body).to.be.a('array');
        expect(response.body[0].id).to.be.a('number');
        expect(response.body[0].title).to.be.a('string');
      })
  });
});