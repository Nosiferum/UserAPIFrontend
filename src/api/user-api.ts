import axios from "axios";

const userApi = axios.create({
    baseURL:  'http://localhost:3001',
    headers: {
        'Content-Type': 'application/json'
    }
});

const registerUser = async (userData: any) => {
    try {
        const response = await userApi.post('/users/register', userData);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || error.response.data.error || 'Registration failed');
        } else {
            throw new Error('Something went wrong');
        }
    }
}

const loginUser = async (userData: any) => {
    try {
        const response = await userApi.post('/users/login', userData);
        return response.data;
    } catch (error: any) {
        if (error.response && error.response.data) {
            throw new Error(error.response.data.message || error.response.data.error || 'Login failed');
        } else {
            throw new Error('Something went wrong');
        }
    }
}

export default {registerUser, loginUser};