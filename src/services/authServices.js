import api from "./apiClient.js";

export const registerUser = async (userData) => {
  const { name, email, password } = userData;
  try {
    api({
      method: "POST",
      url: "/cadastro",
      data: {
        name,
        email,
        password,
      },
    });
    console.log(`Usuarios ${name} cadastrado com sucesso!`);
  } catch (error) {
    console.log("*******     TESTE     *******");
    console.log(error);
  }
};

export const loginUser = async (userData) => {
  const { email, password } = userData;
  try {
    console.log(`TESTE DE LOGIN`);
    const response = await api.post("/login", { email, password });
    localStorage.setItem("token", response.data.token);

    return { success: true, message: response.data.message };
  } catch (error) {
    return { success: false, message: error.response?.data };
  }
};
