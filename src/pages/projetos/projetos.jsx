import { HeadProject, SmallPhoto } from "../../components/projetos_component";
import { dadosProjetos } from "./dadosProjeto";


export default function Projetos() {

    

    return (
        <div className="w-full h-full flex flex-col py-6 gap-5">

            <div className="w-full text-center">
                <h1 className="text-[5rem]">Projetos</h1>
            </div>
            
            <div className="flex flex-col w-full h-[80%] bg-pink-600 place-content-between">

                <HeadProject/>

                <div className="place-items-center">

                    {
                        dadosProjetos.map((item) => {
                            return(
                                <SmallPhoto imagem={item.icon}/>
                            )
                        })
                    }
                    
                </div>

            </div>

        </div>
    )
}