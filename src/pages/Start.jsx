import { useNavigate } from 'react-router'
import bgImage from '../assets/bgStart.png'
import { motion } from "motion/react"

export default function Start() {
    const navigate = useNavigate()

    function handleNavigate() {
        navigate("/cadastro");
    }
    return (
        <motion.div initial={{y: 1000, opacity: 0}} animate={{y: 0, opacity: 1}} exit={{y:1000}} className="w-full h-screen bg-bottom bg-no-repeat flex items-end" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='w-full flex flex-col items-center justify-center gap-5 mb-[70px]'>
                <h1 className='text-4xl font-semibold text-white'>RunFlow</h1>
                <p className='text-white text-center font-extralight'>Seu progresso começa com o <br /> primeiro passo. Corra e evolua!</p>
                <button className='w-[300px] h-[56px] bg-purple-two rounded-2xl font-semibold text-white text-2xl' onClick={handleNavigate}>Começar</button>
            </div>
        </motion.div>
    )
}