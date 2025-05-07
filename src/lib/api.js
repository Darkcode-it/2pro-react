const API_BASE_URL = 'YOUR_API_BASE_URL'; // Replace with your actual API base URL

export const api = {
  async login(credentials) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
      
      if (!response.ok) {
        throw new Error('Login failed');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async register(userData) {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Registration failed');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async getUserProfile() {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch user profile');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },

  async updateUserProfile(userData) {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${API_BASE_URL}/user/profile`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });
      
      if (!response.ok) {
        throw new Error('Failed to update user profile');
      }
      
      return await response.json();
    } catch (error) {
      throw error;
    }
  },
}; 