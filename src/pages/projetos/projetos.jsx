import { useEffect, useState } from "react";
import { HeadProject, SmallPhoto } from "../../components/projetos_component";
import { dadosProjetos } from "./dadosProjeto";
import { MdArrowCircleRight } from "react-icons/md";
import { MdArrowCircleLeft } from "react-icons/md";
import '../../css/projetos.css'


export default function Projetos() {

    const [projetoSelecionado, setProjetoSelecionado] = useState('Chat Online')
    const [movingRight, setMovingRight] = useState(false)
    const [movingLeft, setMovingLeft] = useState(false)
    const [objProjeto, setObjProjeto] = useState([])

    const [projeto_proximidade, setProjeto_proximidade] = useState({})
    
    useEffect(() => {
        setTimeout(() => {
        const projeto_exibido = dadosProjetos.find((item) => {
            return item.nome === projetoSelecionado
        })

        proximidade_icons()
        setObjProjeto(projeto_exibido)
        setMovingLeft(false)
        setMovingRight(false)
        }, 500)
    }, [projetoSelecionado])

    // useEffect(() => {
    //     console.log(projeto_proximidade)

    // }, [projeto_proximidade])

    const indexAtual = dadosProjetos.findIndex((item) => {
        return item.nome === projetoSelecionado
    })

    function proximidade_icons(){
        setProjeto_proximidade({
            item_anterior_hidden: (indexAtual - 2 + dadosProjetos.length) % dadosProjetos.length,
            item_anterior: (indexAtual - 1 + dadosProjetos.length) % dadosProjetos.length,
            item_atual: indexAtual,
            item_seguinte: (indexAtual + 1) % dadosProjetos.length,
            item_seguinte_hidden: (indexAtual + 2) % dadosProjetos.length
        })

        console.log(projeto_proximidade)
    }

    function moveRight(){
        setMovingRight(true)
        const indexDireita = (indexAtual + 1) % dadosProjetos.length
        setProjetoSelecionado(dadosProjetos[indexDireita].nome)
    }

    function moveLeft(){
        setMovingLeft(true)
        const indexEsquerda = (indexAtual - 1 + dadosProjetos.length) % dadosProjetos.length
        setProjetoSelecionado(dadosProjetos[indexEsquerda].nome)
    }

    const indexDesejado = dadosProjetos.findIndex((item) => {
        return item.nome === objProjeto.nome
    })


    return (
        <div className="w-full h-full flex flex-col py-6 gap-5">

            <div className="w-full text-center">
                <h1 className="text-[5rem]">Projetos</h1>
            </div>
            
            <div className="flex flex-col w-full h-[80%] bg-pink-600 place-content-between">

                <HeadProject imagem={objProjeto.imagem} descricao={objProjeto.descricao}/>

                <div className="flex justify-center w-full relative gap-[35rem] py-8">

                <button onClick={moveLeft} className="h-fit self-center hover:cursor-pointer">
                    <MdArrowCircleLeft className="text-[45px] hover:fill-white"/>
                </button>


                    <div className="absolute">
                    <div className="relative">

                        {
                            dadosProjetos.map((item, indice) => {
                                if (indice === projeto_proximidade.item_anterior_hidden || indice === projeto_proximidade.item_anterior || indice === projeto_proximidade.item_atual || indice === projeto_proximidade.item_seguinte || indice === projeto_proximidade.item_seguinte_hidden){

                                    var item_anterior_hidden = indice === projeto_proximidade.item_anterior_hidden
                                    var item_anterior = indice === projeto_proximidade.item_anterior
                                    var item_atual = indice === projeto_proximidade.item_atual
                                    var item_seguinte = indice === projeto_proximidade.item_seguinte
                                    var item_seguinte_hidden = indice === projeto_proximidade.item_seguinte_hidden
                                    return(
                                <>
                                    <div key={indice} 
                                    className={
                                    `${
                                        movingRight?
                                            item_atual?'movendoDireita-main'
                                            :item_seguinte? 'movendoDireita-depois'
                                            :item_anterior? 'movendoDireita-antes'
                                            :item_anterior_hidden? 'movendoDireita-hidden-left'
                                            :item_seguinte_hidden? 'movendoDireita-hidden-right'
                                            :''

                                        :movingLeft? 
                                            item_atual? 'movendoEsquerda-main'
                                            :item_seguinte? 'movendoEsquerda-depois'
                                            :item_anterior? 'movendoEsquerda-antes'
                                            :item_anterior_hidden? 'movendoEsquerda-hidden-left'
                                            :item_seguinte_hidden? 'movendoEsquerda-hidden-right'
                                            :''
                                        :''
                                    } 
                                    item-${
                                    item_atual? 'atual'
                                    :item_seguinte? 'seguinte'
                                    :item_anterior? 'anterior'
                                    :item_anterior_hidden? 'anterior-hidden'
                                    :item_seguinte_hidden? 'seguinte-hidden'
                                    :''
                                    } items`
                                    }
                                    onClick={() => {setProjetoSelecionado(item.nome)}}>
                                        <SmallPhoto imagem={item.icon}/>
                                    </div>    
                                </>
                                )
                            }
                            })
                        }

                    </div>
                </div>

                <button onClick={moveRight} className="h-fit self-center hover:cursor-pointer">
                    <MdArrowCircleRight className="text-[45px] hover:fill-white"/>
                </button>

                </div>

            </div>

        </div>
    )
}