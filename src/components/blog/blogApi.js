import axios from 'api';

const blogApi = {
  getList: (page) => {
    const response = axios.get('/blog', {
      params: {
        page: page
      }
    });
    return response;
  },
  getDetail: (slug) => {
    const response = axios.get(`/blog/${slug}`);
    return response;
  },
  postBlog: () => {
    // was this used?
  }
}

export default blogApi;