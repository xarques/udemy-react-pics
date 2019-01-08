import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 32dae1734c86e2fd1e2dc4a69f4897505038f4599f42d4eda7b0541705c12414'
  }
});
