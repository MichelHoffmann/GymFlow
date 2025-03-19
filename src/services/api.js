const apiUrl = "https://gymflowback.onrender.com";

export default async function createUser(user) {
    const response = await fetch(`${apiUrl}/cadastro`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });
    return response.json();
}