import axios from "axios";

const API_URL =
  "https://iofgzlpifgcaydmdixsu.supabase.co/rest/v1/users";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvZmd6bHBpZmdjYXlkbWRpeHN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODIwMzA4MDMsImV4cCI6MjA5NzYwNjgwM30.p7o57P4m2ZQ7XOxSyh0V7DoNynY6oX_HpEGicVBBzAI";

const headers = {
  apikey: API_KEY,
  Authorization: `Bearer ${API_KEY}`,
  "Content-Type": "application/json",
  Prefer: "return=representation",
};

export const usersAPI = {
  // Ambil semua user
  async getUsers() {
    const response = await axios.get(
      `${API_URL}?select=*`,
      { headers }
    );

    return response.data;
  },

  // Tambah user
  async createUser(data) {
    const response = await axios.post(
      API_URL,
      data,
      { headers }
    );

    return response.data;
  },

  // Update user
  async updateUser(id, data) {
    const response = await axios.patch(
      `${API_URL}?id=eq.${id}`,
      data,
      { headers }
    );

    return response.data;
  },

  // Hapus user
  async deleteUser(id) {
    const response = await axios.delete(
      `${API_URL}?id=eq.${id}`,
      { headers }
    );

    return response.data;
  },

  // Login
  async login(email, password) {
    const response = await axios.get(
      `${API_URL}?email=eq.${email}&password=eq.${password}&select=*`,
      { headers }
    );

    return response.data;
  },

  // Cari user berdasarkan ID
  async getUserById(id) {
    const response = await axios.get(
      `${API_URL}?id=eq.${id}&select=*`,
      { headers }
    );

    return response.data[0];
  },

  // Cek email sudah ada atau belum
  async checkEmail(email) {
    const response = await axios.get(
      `${API_URL}?email=eq.${email}&select=id`,
      { headers }
    );

    return response.data;
  },
};