const chai = require('chai');
const chaiHttp = require('chai-http');
const logger = require('../utils/log.util');

chai.use(chaiHttp);

class HttpClient {

    async executeGetRequest(endpoint, method) {
      logger.info(`Execute get request ${endpoint + method}`)
      const res = await chai.request(endpoint).get(method);
      if (res.status == 200) {
        return res.text;
      } else {
        throw `Response is not 200 OK. Status code is ${res.status} and text is ${res.text}`;
      }
  }
}

module.exports = new HttpClient();