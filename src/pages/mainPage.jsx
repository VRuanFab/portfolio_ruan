import '../css/pages.css'
import Habilidades from './habilidades/habilidades'
import Projetos from './projetos/projetos'
import HomePage from './homepage'

export default function MainPage() {
    
    const ArrPages = [
                        <HomePage/>,
                        <Habilidades/>,
                        <Projetos/>
                    ]

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

            {
                ArrPages.map((pagina, indice) => {
                    return (
                        <div key={indice} className='snap-center h-screen'>
                            {pagina}
                        </div>
                    )
                })
            }

        </div>
        </>
    )
}