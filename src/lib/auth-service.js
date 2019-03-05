import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}/auth`,
      withCredentials: true
    })
  }

  signup(user) {
    const { username, password, location } = user;
    return this.auth.post('/signup', {username, password, location})
      .then(({ data }) => data);
  }

  updateProfile(user) {
    const { id ,username, location, imageURL } = user;
    return this.auth.post('/update', { id , username, location, imageURL })
      .then(({ data }) => data);
  }
  
  updateHome(id, home) {
    return this.auth.post('/homeupdate', { id , home })
      .then(({ data }) => data);
  }

  login(user) {
    const { username, password } = user;
    return this.auth.post('/login', {username, password})
      .then(({ data }) => data);
  }

  logout() {
    return this.auth.post('/logout', {})
      .then(response => response.data)
  }

  me(user) {
    return this.auth.get('/me')
    .then(response => response.data)
  }
}

const authService = new AuthService();

export default authService;
