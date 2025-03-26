import foto from '../../assets/images/projetos/chat_online_prototipo.png'


export default function DadosSobreMim(){

    return(
            <div className="w-full h-full flex gap-15">

                <div className="w-[50rem] ml-[10rem] place-content-center flex items-center">
                    <img src={foto}/>
                </div>

                <div className="bg-blue-600 w-full">
                    <section>
                        <h2>Meu nome é Ruan</h2>

                        <p>
                            Sou programador apaixonado
                        </p>

                        <p>
                            Texto texto texto
                        </p>
                    </section>
                </div>

            </div>
    )
}