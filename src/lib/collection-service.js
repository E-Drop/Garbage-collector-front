import axios from 'axios';

class CollectionService {
  constructor() {
    this.consulta = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    })
  }

  collect(data) {
    return this.consulta.get('/collections')
      .then(({ data }) => data);
  }
  reserve(data, name){
      return this.consulta.post('/collections' , { data, name })
      .then(({ data }) => data);
  }
}

const collectionService = new CollectionService();

export default collectionService;