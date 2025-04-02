import { useState } from "react"
import { mainPage_routes } from "../routes/imports/mainPage"
import { TbArrowBigUpFilled } from "react-icons/tb";



export function DropDown({onClick}){
    const [showDrop, setShowDrop] = useState(false)

    const global_css = {
        unselected: 'hover:cursor-pointer hover:text-white'
    }

    return(
        <>
        <div className="flex flex-col relative">
            <button onClick={() => setShowDrop(!showDrop)}
            className={`${showDrop? 'text-gray-500':''} order-last flex self-center w-fit`}>

                <div className="bg-white rounded-full circle-icon hover:cursor-pointer hover:text-white hover:bg-black p-1">
                    <TbArrowBigUpFilled className="h-[1.6rem] w-fit"/>
                </div>
                    
            </button>

            <div className={`flex flex-col gap-[0.75rem] py-[0.6rem] w-fit ${showDrop? '':'invisible'}`}>
                {
                    mainPage_routes.map((item) => (
                        <button value={item.name} onClick={onClick} className={`${global_css.unselected}`}>{item.name_drop_list}</button>
                    ))
                }
            </div>
        </div>
        </>
    )
}