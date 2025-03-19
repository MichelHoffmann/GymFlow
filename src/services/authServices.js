import api from './apiClient.js'

export const registerUser = async (userData) => {
    const { name, email, password } = userData
    try {
        api({
            method: 'POST',
            url: '/cadastro',
            data: {
                name,
                email,
                password
            }
        })
        console.log(`Usuarios ${name} cadastrado com sucesso!`)
    } catch (error) {
        console.log('*******     TESTE     *******')
        console.log(error)

    }
}

export const loginUser = async (userData) => {
    const { email, password } = userData
    console.log(`TESTE DE LOGIN`)
    api.post('/login', {
        email,
        password
    }).then((response) => {
        console.log(response.data)
    }).catch((error) => {
        console.log(error.response?.data)
    })
}