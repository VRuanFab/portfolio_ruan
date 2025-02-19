import Habilidade_componente from "../../components/habilidade_component";
import '../../css/svg_styles.css'
import { dadosConhecimentos } from "./dadosConhecimentos";


export default function Habilidades(){

    return (
        <div className="w-full h-full flex-col py-12 gap-10">
            
            <div className="w-full text-center">
                <h1 className="text-[5rem]">Habilidades</h1>
            </div>

            <div className="w-full h-[70%] flex gap-10 justify-center items-center">
                {
                    dadosConhecimentos.map((item) => {
                        return (
                            <Habilidade_componente key={item.name} nome={item.name} img={item.icon}/>
                        )
                    })
                }

            </div>
        </div>
    )
}