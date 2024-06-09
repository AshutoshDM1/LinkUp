import axios from "axios";

const API_URL = "https://auth-backend-dm.vercel.app";

export const signUpUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/user/signup/`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Form submitted successfully:", response.data);
    alert("Successfully signed up!");
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      alert(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error("No response from server:", error.request);
      alert("No response from server");
    } else {
      console.error("Request error:", error.message);
      alert(`Request error: ${error.message}`);
    }
  }
};

export const login = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/v1/user/login`, userData, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log("Form submitted successfully:", response.data);
    alert("Successfully signed up!");
    const token = response.data.token;
    localStorage.setItem("token", token);
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      alert(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error("No response from server:", error.request);
      alert("No response from server");
    } else {
      console.error("Request error:", error.message);
      alert(`Request error: ${error.message}`);
    }
  }
};

export const getChatPosts = async () => {
  try {
    const jwtToken = getToken();
    const response = await axios.get(
      "https://auth-backend-dm.vercel.app/v1/user/chat/post",
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    throw error;
  }
};
export const postChatPosts = async (userdata) => {
  try {
    const jwtToken = getToken();
    const response = await axios.post(
      "https://auth-backend-dm.vercel.app/v1/user/chat/post",
      userdata,
      {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      }
    );
    const data = response.data;
    return data;
  } catch (error) {
    if (error.response) {
      console.error("Server error:", error.response.data);
      alert(`Server error: ${error.response.data.message}`);
    } else if (error.request) {
      console.error("No response from server:", error.request);
      alert("No response from server");
    } else {
      console.error("Request error:", error.message);
      alert(`Request error: ${error.message}`);
    }
  }
};

export const getToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
};

export const showUser = () => {};
