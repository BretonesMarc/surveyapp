import axios from 'axios';

const url = 'http://localhost:5001/surveys';

export const fetchSubmissions = () => axios.get(url);