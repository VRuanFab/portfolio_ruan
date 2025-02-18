import Habilidade_componente from "../components/habilidade_component";
import '../css/svg_styles.css'
import python_logo from '../assets/images/python_logo.svg'
import javascript_logo from '../assets/images/javascript_logo.svg'
import git_logo from '../assets/images/git_logo.svg'
import typescript_logo from '../assets/images/typescript_logo.svg'
import nodejs_logo from '../assets/images/nodejs_logo.svg'
import sql_logo from '../assets/images/sql_logo.svg'
import react_logo from '../assets/images/react_logo.svg'
import css_logo from '../assets/images/css_logo.svg'

export default function Habilidades(){

    return (
        <div className="w-full h-full flex-col py-12 gap-10">
            
            <div className="w-full text-center">
                <h1 className="text-[5rem]">Habilidades</h1>
            </div>

            <div className="w-full flex gap-4">

                <Habilidade_componente nome="javascript" img={javascript_logo}/>

                <Habilidade_componente nome="Python" img={python_logo} className='python_svg'/>


                <Habilidade_componente nome="React" img={react_logo}/>

                <Habilidade_componente nome="Node Js" img={nodejs_logo}/>

                <Habilidade_componente nome="Git" img={git_logo}/>

                <Habilidade_componente nome="CSS3" img={css_logo}/>

                <Habilidade_componente nome="Typescript" img={typescript_logo}/>

                <Habilidade_componente nome="Typescript" img={sql_logo}/>

            </div>
        </div>
    )
}