import DadosSobreMim from './dados_sobre_mim'

export default function SobreMim(){

    return(
        <>
        <div className="w-full h-full py-6 px-5">

            <div className="w-full text-center">
                <h1 className="text-[5rem]">
                    Sobre mim
                </h1>
            </div>

            <div className="w-full h-[50rem] py-[5rem] px-[2rem]">
                {/* <div className="w-full h-full bg-pink-400 grid grid-cols-2 grid-rows-1"> */}
                <DadosSobreMim/>
            </div>
            
        </div>
        </>
    )
}