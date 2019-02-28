import axios from 'axios';

class CollectionService {
  constructor() {
    this.consulta = axios.create({
      baseURL: 'http://localhost:5000',
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