import '../css/pages.css'
import Habilidades from './conhecimentos'
import Projetos from './projetos'
import HomePage from './homepage'

export default function MainPage() {
    

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

            <div className="snap-center h-screen">
                <HomePage/>
            </div>

            <div className="snap-center h-screen">
                <Habilidades/>
            </div>


            <div className='snap-center h-screen'>
                <Projetos/>
            </div>
        </div>
        </>
    )
}