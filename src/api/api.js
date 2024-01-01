import axios from "axios"

const getBaseUrl = (mode) => {
  let url;
  switch (mode) {
    case 'production':
      url = 'https://profile-be.anandadf.my.id';
      break;
    case 'development':
      url = 'http://localhost:8080'
      break;
  }
  return url;
}

export default axios.create({
  baseURL: getBaseUrl('production'),
});