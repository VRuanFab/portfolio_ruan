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

    const indexDesejado = dadosProjetos.findIndex((item) => {
        return item.nome === objProjeto.nome
    })

    const objStyle= {
        close_right1: 'closeToMain rightCarousel relative top-1 rotate-[2deg]',
        close_right2: 'closeToMain2 rightCarousel relative top-5 rotate-[5deg]',

        close_left1: 'closeToMain leftCarousel relative top-1 rotate-[-2deg]',
        close_left2: 'closeToMain2 leftCarousel relative top-5 rotate-[-5deg]',

        far: 'notClose hidden'
    }

    function facilitadorEstilo(indice) {
        switch (indexDesejado){
            case indice - 1:
                return objStyle.close_right1;

            case indice - 2:
                return objStyle.close_right2;

            case indice + 1:
                return objStyle.close_left1;

            case indice + 2:
                return objStyle.close_left2;

            default:
                return objStyle.far
        }
    }

    function beginIcon(whichElement){
        if (indexDesejado === 0  && whichElement === 0){
            return objStyle.close_left2
        }
        else if (indexDesejado === 0 && whichElement === 1){
            return objStyle.close_left1
        }
        else if (indexDesejado === 1  && whichElement === 1){
            return objStyle.close_left2
        }
        else {
            return objStyle.far
        }
    }

    function endIcon(whichElement){
        if (indexDesejado === dadosProjetos.length - 1 && whichElement == 0){
            return objStyle.close_right2
        }
        else if (indexDesejado === dadosProjetos.length - 1 && whichElement == 1){
            return objStyle.close_right1
        }
        else if (indexDesejado === dadosProjetos.length - 2 && whichElement == 1){
            return objStyle.close_right2
        }
        else {
            return objStyle.far
        }
    }

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
                                    <>
                                    {
                                        (indice - 1 + dadosProjetos.length) % dadosProjetos.length === dadosProjetos.length - 1?
                                        <>
                                        <div key={dadosProjetos.length + 1} className={beginIcon(0)} onClick={() => {setProjetoSelecionado(dadosProjetos[dadosProjetos.length - 2].nome)}}>
                                            <SmallPhoto imagem={dadosProjetos[dadosProjetos.length - 2].icon}/>
                                        </div>

                                        <div key={dadosProjetos.length + 2} className={beginIcon(1)} onClick={() => {setProjetoSelecionado(dadosProjetos[dadosProjetos.length - 1].nome)}}>
                                            <SmallPhoto imagem={dadosProjetos[dadosProjetos.length - 1].icon}/>
                                        </div>
                                        </>
                                        :
                                        ''
                                    }

                                    <div key={indice} className={item.nome === objProjeto.nome? '':facilitadorEstilo(indice)} onClick={() => {setProjetoSelecionado(item.nome)}}>
                                        <SmallPhoto imagem={item.icon}/>
                                    </div>

                                    {
                                        (indice + 1) % dadosProjetos.length === 0?
                                        <>
                                        <div key={dadosProjetos.length + 3} className={endIcon(1)} onClick={() => {setProjetoSelecionado(dadosProjetos[0].nome)}}>
                                            <SmallPhoto imagem={dadosProjetos[0].icon}/>
                                        </div>
                                        
                                        <div key={dadosProjetos.length + 4} className={endIcon(0)} onClick={() => {setProjetoSelecionado(dadosProjetos[1].nome)}}>
                                            <SmallPhoto imagem={dadosProjetos[1].icon}/>
                                        </div>
                                        </>
                                        :
                                        ''
                                    }
                                    </>
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