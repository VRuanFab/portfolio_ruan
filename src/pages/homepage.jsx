

export default function HomePage() {

    return(
        <div className="h-full w-full grid grid-cols-3 items-center px-20">
            <div className="col-span-2 w-full h-[80%] flex place-items-center pl-15">
            
                <h1 className="h-fit text-[11rem] font-bold text-white">
                    Ruan <br/> Fabricio
                </h1>
            </div>


            <div className="col-span-1 h-[55%] bg-slate-600">
                navbar aqui
            </div>
        </div>
    )
}