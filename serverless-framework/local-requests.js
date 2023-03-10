const axios = require('axios');

const API = process.env.API;

const DUMMY_POST_DATA = {
  name: 'Thomas AWS Test',
  email: 'thomas@awstest.com',
};

const processRequest = async () => {
  const requestData = JSON.stringify(DUMMY_POST_DATA);
  const response = await axios.post(API, { requestData });
  console.log(response.data);
};

processRequest();
