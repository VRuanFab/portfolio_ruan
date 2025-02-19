import { useEffect, useState } from "react";
import { HeadProject, SmallPhoto } from "../../components/projetos_component";
import { dadosProjetos } from "./dadosProjeto";
import { MdArrowCircleRight } from "react-icons/md";
import { MdArrowCircleLeft } from "react-icons/md";
import '../../css/projetos.css'


export default function Projetos() {

    const [projetoSelecionado, setProjetoSelecionado] = useState('Chat Online')

    const [objProjeto, setObjProjeto] = useState([])
    
    useEffect(() => {
        const projeto_exibido = dadosProjetos.find((item) => {
            return item.nome === projetoSelecionado
        })

        setObjProjeto(projeto_exibido)

    }, [projetoSelecionado])

    function moveRight(){
        const indexAtual = dadosProjetos.findIndex((item) => {
            return item.nome === projetoSelecionado
        })

        const indexDireita = (indexAtual + 1) % dadosProjetos.length
        setProjetoSelecionado(dadosProjetos[indexDireita].nome)
    }

    function moveLeft(){
        const indexAtual = dadosProjetos.findIndex((item) => {
            return item.nome === projetoSelecionado
        })

        const indexEsquerda = (indexAtual - 1 + dadosProjetos.length) % dadosProjetos.length
        
        setProjetoSelecionado(dadosProjetos[indexEsquerda].nome)
    }

    function facilitadorEstilo(indice) {
        const indexDesejado = dadosProjetos.findIndex((item) => {
            return item.nome === objProjeto.nome
        })

        if (indice - 1 === indexDesejado){
            return 'closeToMain rightCarousel relative top-1 rotate-[2deg]'
        }

        else if (indice - 2 === indexDesejado){
            return 'closeToMain2 rightCarousel relative top-5 rotate-[5deg]'
        }

        else if (indice + 1 === indexDesejado){
            return 'closeToMain leftCarousel relative top-1 rotate-[-2deg]'
        }

        else if (indice + 2 === indexDesejado){
            return 'closeToMain2 leftCarousel relative top-5 rotate-[-5deg]'
        }

        else{
            return 'notClose hidden'
        }
    }

    console.log(facilitadorEstilo(1))

    return (
        <div className="w-full h-full flex flex-col py-6 gap-5">

            <div className="w-full text-center">
                <h1 className="text-[5rem]">Projetos</h1>
            </div>
            
            <div className="flex flex-col w-full h-[80%] bg-pink-600 place-content-between">

                <HeadProject imagem={objProjeto.imagem} descricao={objProjeto.descricao}/>

                <div className="flex justify-center w-full gap-6">

                <button onClick={moveLeft} className="h-fit self-center hover:cursor-pointer">
                    <MdArrowCircleLeft className="text-[45px] hover:fill-white"/>
                </button>

                    <div className="overflow-hidden flex justify-center gap-20 py-4 px-3">

                        {
                            dadosProjetos.map((item, indice) => {
                                return(
                                    <div key={indice} className={item.nome === objProjeto.nome? '':facilitadorEstilo(indice)} onClick={() => {setProjetoSelecionado(item.nome)}}>
                                        <SmallPhoto imagem={item.icon}/>
                                    </div>
                                )
                            })
                        }

                    </div>

                <button onClick={moveRight} className="h-fit self-center hover:cursor-pointer">
                    <MdArrowCircleRight className="text-[45px] hover:fill-white"/>
                </button>

                </div>

            </div>

        </div>
    )
}