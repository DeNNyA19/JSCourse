var chai = require('chai')
  , chaiHttp = require('chai-http');

chai.use(chaiHttp);

class HttpClient {

    async executeGetRequest(endpoint, method) {
      const res = await chai.request(endpoint).get(method);
      return res.text;
    }
}

module.exports = new HttpClient();