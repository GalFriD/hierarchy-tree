import axios from 'axios';

const DATA_PROVIDER_URL = 'https://gongfetest.firebaseio.com/.json';

async function getSecrets() {
  const response = await axios.get(DATA_PROVIDER_URL);

  return response.data.secrets;
}

async function getUsers() {
  const response = await axios.get(DATA_PROVIDER_URL);

  return response.data.users;
}

const networkService = { getSecrets, getUsers };

export default networkService;
