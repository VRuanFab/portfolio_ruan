import '../css/pages.css'
import {mainPage_routes} from '../routes/imports/mainPage'

export default function MainPage() {

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

            {
                mainPage_routes.map((pagina, indice) => {
                    return (
                        <div key={indice} className={`snap-center h-screen ${pagina.name}`}>
                            {pagina.element}
                        </div>
                    )
                })
            }

        </div>
        </>
    )
}