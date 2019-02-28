import axios from 'axios';

class DonationService {
  constructor() {
    this.consulta = axios.create({
      baseURL: 'http://localhost:5000',
      withCredentials: true
    })
  }

  donate(data) {
    const { username, name, number, location } = data;

    return this.consulta.post('/donate', {username, name, number, location})
      .then(({ data }) => data);
  }
}

const donationService = new DonationService();

export default donationService;
