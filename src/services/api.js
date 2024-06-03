import axios from 'axios';

const API_URL = 'https://auth-backend-dm.vercel.app';

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/user/signup/`, userData , {
      headers : {
        'Content-Type': 'application/json'
      }
    });
    console.log('Form submitted successfully:', response.data);
    alert('Successfully signed up!');
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      console.error('Server error:', error.response.data);
      alert(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      // The request was made but no response was received
      console.error('No response from server:', error.request);
      alert('No response from server');
    } else {
      // Something happened in setting up the request that triggered an error
      console.error('Request error:', error.message);
      alert(`Request error: ${error.message}`);
    }
  }
};

export const showUser = async () => {
  try {
    const response = await axios.get(`${API_URL}/`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
