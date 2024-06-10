import { motion } from 'framer-motion';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi'

const AddCard = ({column,setCards,headingColor}) => {
    const [input,setInput]=useState("")
    const [adding,setAdding]=useState(false);
    const handelSubmit=(e)=>{
        e.preventDefault();
        if(!input.trim().length) return;
        const newCard={
            column,
            title:input.trim(),
            id:Math.random.toString()
        }
        setCards((prev)=>[...prev,newCard])
        setAdding(false)
    }
  return (
    <>

        {
            adding?
                <motion.form layout  onSubmit={handelSubmit}>
                    <input onChange={(e)=>setInput(e.target.value)} autoFocus 
                    placeholder='Add New Task ...'
                    className={` w-full rounded border border-green-400 bg-green-400/30 text-sm text-neutral-50 placeholder-yellow-200/30 focus:outline-0 p-2`}/>
                        <div className='mt-1.5 flex items-center justify-end gap-1.5'>
                            <button onClick={()=>setAdding(!adding)} className='px-3 py-1.5 text-sx text-neutral-400 transition-colors hover:text-neutral-50'>Close</button>
                            <button type='sub,it' className=' flex items-center gap-1.5 rounded bg-neutral-50 px-3 py-1.5 text-xs text-neutral-900 transition-colors hover:bg-neutral-400'>Add</button>
                        </div>
              
                </motion.form>
            :<button layout onClick={()=>setAdding(true)}
            className='flex w-full items-center gap-1.5 px-3 py-1.5 text-xs text-neutral-400
            transition-colors hover:text-neutral-50'>
                <FiPlus/>
                <span>Add Cards</span>
            </button>

        }
    </>
  )
}

export default AddCard