import api from './apiClient.js'

api.post('/cadastro').then((req, res) => {
    console.log(req)
})

export const registerUser = async (userData) => {
    const {name, email, password} = userData
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