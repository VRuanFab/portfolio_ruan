import Habilidade_componente from "../components/habilidade_component";
import { IoLogoJavascript,
        IoLogoPython,
        IoLogoReact,
        IoLogoNodejs,
        IoLogoGithub,
        IoLogoCss3
    } from "react-icons/io5";

import { SiTypescript } from "react-icons/si";

export default function Habilidades(){

    return (
        <div className="w-full h-full flex-col py-12 gap-10">
            
            <div className="w-full text-center">
                <h1 className="text-[5rem]">Habilidades</h1>
            </div>

            <div className="w-full flex">

                <Habilidade_componente nome="javascript" img={<IoLogoJavascript className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<IoLogoPython className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<IoLogoReact className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<IoLogoNodejs className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<IoLogoGithub className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<IoLogoCss3 className="w-full h-full hover:fill-yellow-400"/>}/>

                <Habilidade_componente nome="javascript" img={<SiTypescript className="w-full h-full hover:fill-yellow-400"/>}/>

            </div>
        </div>
    )
}