import React from 'react'
import DropIndicator from './DropIndicator'
import { motion } from 'framer-motion'

const Card = ({title,id,column,handleDrag}) => {

  return (
    <>
     <DropIndicator beforeId={id} column={column}/>
    <motion.div draggable={true} onDragStart={(e)=>handleDrag(e,{
        title,id,column})}
        layout layoutId={id}
         className=' cursor-grab roun border border-neutral-700 bg-neutral-800 p-3 active:cursor-grabbing'>
    <p className=' text-sm text-neutral-100'>{title}</p>
    </motion.div>
    
    </>
  )
}

export default Card