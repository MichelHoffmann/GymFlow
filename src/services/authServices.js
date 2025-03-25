import api from "./apiClient.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
  try {
    await api.post('/cadastro', {name, email, password});
    return { success: true, message: "Usuario cadastrado com sucesso!" };
  } catch (error) {
    return { success: false, message: error.response.data.message };
  }
};

export const loginUser = async (userData) => {
  const { email, password } = userData;
  try {
    const response = await api.post("/login", { email, password });
    localStorage.setItem("token", response.data.token);
    return { success: true, message: response };
  } catch (error) {
    return { success: false, message: error.response.data };
  }
};

export const verifyToken = async (token) => {
  try {
    const response = await api.get("/user/me", {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    return response.data
  } catch (error) {
    console.log(error)
  }
}