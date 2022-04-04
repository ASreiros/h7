import { useEffect, useState } from "react"

export default function Gyvunas({info, run}) {
    const [type, setType] = useState("Avynas")

    useEffect(() => {
        if(info[0]==="K"){
            setType("Karve")
        } else{
            setType("Avynas")
        }
    }, [info])


    return(
        <button onClick={run} id={info} className={type}>{info}</button>
    )
}