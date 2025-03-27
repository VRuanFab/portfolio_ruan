import { mainPage_routes } from "../routes/imports/mainPage"
import { DropDown } from "../components/dropDown"

export default function HomePage() {

    const descer = (pagina) => {
        document.querySelectorAll(`.${pagina}`)[0].scrollIntoView({behavior: 'smooth'})
    }

    const voltarInicio = () => {
        document.querySelectorAll('.HomePage')[0].scrollIntoView({behavior: 'smooth'})
    }

    return(
        <div className="h-full w-full grid grid-cols-3 items-center px-20">
            <div className="col-span-2 w-full h-[80%] flex place-items-center pl-15">
            
                <h1 className="h-fit text-[11rem] font-bold text-white">
                    Ruan <br/> Fabricio
                </h1>
            </div>


            <div className="col-span-1 h-[55%] bg-slate-600/30 rounded-xl text-center py-[5rem]">
                <h2 className="my-[2rem] text-2xl">
                    Barra de Navegação
                </h2>

                <div className="flex flex-col gap-[2.5rem]">

                {
                    mainPage_routes.map((page, index) => {
                        if (page.name != 'HomePage')
                            return(
                                <>
                                <button onClick={(e) => descer(e.target.value)} value={page.name}
                                className={
                                    `
                                    hover:cursor-pointer hover:text-white text-xl
                                    `
                                }
                                >
                                    {page.name}
                                </button>
                                </>
                            )
                    })
                }

                </div>
            </div>


            <button onClick={voltarInicio}
            className="fixed bottom-5 right-5"
            >
                {/* Voltar ao inicio */}
                <DropDown/>
            </button>
        </div>
    )
}