import { useState, useEffect } from "react";
import ButtonMain from "./ButtonMain";
import Ganykla from "./Ganykla";
import Rand from "../Common/Rand"

export default function HolderGanykla() {
    const [avysList, setAvysList]=useState([])
    const [karvesList, setKarvesList]=useState([])

    useEffect(() => {
        let avystemp = JSON.parse(localStorage.getItem("avys0404"))   
        if(avystemp === null){
            avystemp = [];
            localStorage.setItem("avys0404", JSON.stringify(avystemp))
        }
        setAvysList(avystemp)
        let karvestemp = JSON.parse(localStorage.getItem("karves0404"))   
        if(karvestemp === null){
            karvestemp = [];
            localStorage.setItem("karves0404", JSON.stringify(karvestemp))
        }  
        setKarvesList(karvestemp)
    },[]);

    const createAnimals = ()=>{
      const knumber = Rand(5,20)
      const anumber = Rand(5,20) 
      const kList = []
      const aList = []
       for (let i = 0; i < knumber; i++) {
           let id = `K`
           for (let y = 0; y < 7; y++) {
               id += Rand(0,9)
           }
           kList.push(id)
       }
       for (let i = 0; i < anumber; i++) {
        let id = `A`
        for (let y = 0; y < 7; y++) {
            id += Rand(0,9)
        }
        aList.push(id)
        }
        setAvysList([...aList])
        setKarvesList([...kList])
        localStorage.setItem("avys0404", JSON.stringify(aList))
        localStorage.setItem("karves0404", JSON.stringify(kList))
    }

    const runAround = g =>{
        let aArr = []
        avysList.forEach(x=>{
            if(x !==g.target.attributes.id.value){
                aArr.push(x)
            }
        })
        if(avysList.length !== aArr.length){
            const kList = [...karvesList, g.target.attributes.id.value]
            const aList = [...aArr]
            setKarvesList(kList)
            setAvysList(aList)
            localStorage.setItem("karves0404", JSON.stringify(kList))
            localStorage.setItem("avys0404", JSON.stringify(aList))
        } else{
            let kArr = []
            karvesList.forEach(x=>{
                if(x !==g.target.attributes.id.value){
                    kArr.push(x)
                }
            })
            const aList = [...avysList, g.target.attributes.id.value]
            const kList = [...kArr]
            setKarvesList(kList)
            setAvysList(aList)
            localStorage.setItem("karves0404", JSON.stringify(kList))
            localStorage.setItem("avys0404", JSON.stringify(aList))    
        }

        
    }

    return(
        <>
            <ButtonMain add={createAnimals}></ButtonMain>
            <Ganykla avys={avysList} karves={karvesList} run={runAround}></Ganykla>
        </>
    )
}