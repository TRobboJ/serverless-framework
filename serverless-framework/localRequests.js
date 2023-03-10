const axios = require('axios');

const API = process.env.API;

const DUMMY_POST_DATA = {
  name: 'Thomas AWS Test',
  email: 'thomas@awstest.com',
};

const processRequest = async () => {
  const response = await axios.post(API, { DUMMY_POST_DATA });
  console.log(response.data);
};

processRequest();
