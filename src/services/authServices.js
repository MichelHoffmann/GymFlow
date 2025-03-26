import api from "./apiClient.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
  try {
    await api.post("/cadastro", { name, email, password });
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
    localStorage.setItem("email", response.data.user);
    return { success: true, message: response };
  } catch (error) {
    return { success: false, message: error.response.data };
  }
};

export const verifyToken = async (token) => {
  try {
    const response = await api.get("/user/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const addMeta = async (userInfo) => {
  const { email, meta } = userInfo;
  const token = localStorage.getItem("token");

  if (!token) {
    return { success: false, message: "Token não encontrado" };
  }

  try {
    const response = await api.patch(
      "user/me",
      { email, meta },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(`RESPONSE:: ${response}`);
    return {
      success: true,
      data: response.data,
      message: "Meta atualizada com sucesso",
    };
  } catch (error) {
    console.log(error.response.data);
    return error;
  }
};
