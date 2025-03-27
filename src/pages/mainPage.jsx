import '../css/pages.css'
import {mainPage_routes} from '../routes/imports/mainPage'

export default function MainPage() {

    console.log(mainPage_routes)

    return(
        <>
        <div className="snap-y snap-mandatory h-screen overflow-y-scroll">

            {
                mainPage_routes.map((pagina, indice) => {
                    console.pagina
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