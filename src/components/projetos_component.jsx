


export function HeadProject ({imagem, descricao}) {

    return(
        <div className="grid grid-cols-3 h-full mb-[2rem] gap-[1rem]">
            
            <div className="col-span-2 h-full place-content-center bg-blue-500 hover:cursor-pointer">
                {
                imagem?
                imagem.map((item, indice) => {
                    return (
                        <div key={indice}>
                            {item}
                        </div>
                    )
                })
                :
                ''
                }
            </div>

            <div className="p-2 text-center break-before-all place-content-center font-medium text-xl leading-[1.95rem]">
                <h3>
                    {descricao}
                </h3>
            </div>

        </div>
    )
}


export function SmallPhoto({imagem}) {

    return(
        <div className="w-full flex place-content-center">
            <img src={imagem} alt="" className="w-[3.5rem]"/>
        </div>
    )
}