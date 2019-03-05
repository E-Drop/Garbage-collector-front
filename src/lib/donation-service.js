import axios from 'axios';

class DonationService {
  constructor() {
    this.consulta = axios.create({
      baseURL: process.env.REACT_APP_API_URL,
      withCredentials: true
    })
  }

  donate(data) {
    const { username, tinsnumber, bottlesnumber, location } = data;

    return this.consulta.post('/donate', {username, tinsnumber, bottlesnumber, location})
      .then(({ data }) => data);
  }
}

const donationService = new DonationService();

export default donationService;
