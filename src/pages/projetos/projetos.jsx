import { useEffect, useState } from "react";
import { HeadProject, SmallPhoto } from "../../components/projetos_component";
import { dadosProjetos } from "./dadosProjeto";
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
            return 'closeToMain relative top-1'
        }

        else if (indice - 2 === indexDesejado){
            return 'closeToMain2 relative top-2'
        }

        else if (indice + 1 === indexDesejado){
            return 'closeToMain relative top-1'
        }

        else if (indice + 2 === indexDesejado){
            return 'closeToMain2 relative top-2'
        }

        else{
            return 'notClose'
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

                <div className="flex w-full">

                <p onClick={moveLeft}>bt left teste</p>
                    <div className="overflow-scroll flex justify-center gap-20 bg-green-500 py-4">

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
                <p onClick={moveRight}>bt right teste</p>

                </div>

            </div>

        </div>
    )
}