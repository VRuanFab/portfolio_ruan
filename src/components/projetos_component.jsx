


export function HeadProject ({imagem, descricao}) {

    return(
        <div className="grid grid-cols-3 h-full">
            
            <div className="col-span-2 h-full place-content-center bg-blue-500">
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

            <div className="">
                <h3>
                    {descricao}
                </h3>
            </div>

        </div>
    )
}


export function SmallPhoto({imagem}) {


    return(
        <div className="h-[5rem]">
            {imagem}
        </div>
    )
}