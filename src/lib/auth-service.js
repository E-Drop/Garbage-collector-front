import axios from 'axios';

class AuthService {
  constructor() {
    this.auth = axios.create({
      baseURL: 'http://localhost:5000/auth',
      withCredentials: true
    })
  }

  signup(user) {
    const { username, password, location } = user;
    return this.auth.post('/signup', {username, password, location})
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
