import React, { useState } from 'react'
import {FaFire} from 'react-icons/fa'
import {FiTrash} from 'react-icons/fi'
const Barrell = ({setCards}) => {
   const [active,setActive]= useState(false);
   const handleDragOver=(e)=>{
    e.preventDefault();
    setActive(true)
   }
   const handleDragLeave=()=>{
    setActive(false)
   }
   const handleDragEnd=(e)=>{
    const cardId=e.dataTransfer.getData("cardId");
    setCards(prev=>prev.filter(crd=>crd.id!==cardId))

    setActive(false)
   }

  return (
    <div onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDragEnd} className={`mt-10 grid h-56 w-56 shrink-0 place-content-center rounded border text-3xl ${
        active?" border-red-800 bg-red-80/20 text-red-500":" border-neutral-600 border-neutral-600/30"
    }`}>
    {
        active?<FaFire className=' animate-bounce'/>:<FiTrash/>
    }
    </div>
  )
}

export default Barrell