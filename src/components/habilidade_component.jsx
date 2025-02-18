


export default function Habilidade_componente({nome, img, className}) {

    return(
        <div className="flex flex-col items-center w-25">
            <img src={img} alt="" className={`w-fit h-fit shadow_style ${className}`}/>
            <label className="font-semibold text_hover_style">
                {nome}
            </label>
        </div>
    )
}