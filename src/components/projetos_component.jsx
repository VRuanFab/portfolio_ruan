


export function HeadProject ({imagem, descricao}) {

    return(
        <div className="grid grid-cols-3 h-full">
            
            <div className="col-span-2 h-full place-content-center bg-blue-500">
                imagem grandona
            </div>

            <div>
                <h3>
                    {descricao}
                </h3>
            </div>

        </div>
    )
}


export function SmallPhoto({imagem}) {


    return(
        <div>
            {imagem}
        </div>
    )
}