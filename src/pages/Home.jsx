import userImg from '../assets/userImg.png'
import userIcon from '../assets/userIcon.svg'
import exitIcon from '../assets/exitIcon.svg'

export default function Home() {
    let page = 'treino'
    return (
        <>
        <header className='w-full h-30 bg-gray-02 flex justify-between items-center px-7'>
            <div className='flex items-center justify-center gap-3'>
                <img src={userImg} alt="Imagem do usuario" className='border-2 rounded-4xl border-gray-03'/>
                <p className='font-bold text-xl text-purple'>Olá, Michel</p>
            </div>
            <div className='flex items-center justify-center gap-3'>
                <img src={userIcon} alt="Icone de acesso ao perfil do usuario" />
                <img src={exitIcon} alt="Icone para sair da conta" />
            </div>
        </header>
        </>
    )
}
/// {page === 'treino' ? <h1>Olá</h1>}