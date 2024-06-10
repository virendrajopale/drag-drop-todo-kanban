import React, { useState } from 'react'
import Card from './Card';
import DropIndicator from './DropIndicator';
import AddCard from './AddCard';

const Column = ({title ,headingColor,column,cards,setCards,color}) => {
    const [active,setActive]=useState(false);
    const filtercards=cards.filter((c)=>c.column===column)
    const handelLightInd=(e)=>{
        const indicator=getInd()
        clearHighlight(indicator)
        const el=getNearestInd(e,indicator);

        el.element.style.opacity="1"
    }
    const getInd=()=>{
        return Array.from(document.querySelectorAll(`[data-column="${column}"]`))
    }
    const clearHighlight=(inds)=>{
        const indicator=inds || getInd();
        indicator.forEach((i)=>{
            i.style.opacity="0"
        })
    }
    const getNearestInd=(e,indicators)=>{
        const DISTANCE_OFFSET=50;
        const el=
        indicators.reduce((closest,child)=>{
            const box=child.getBoundingClientRect();
            const offset=e.clientY-(box.top+ DISTANCE_OFFSET);
            if(offset<0 && offset>closest.offset){
                return {offset:offset,element:child};
            }
            else{
                return closest
            }
        },{offset:Number.NEGATIVE_INFINITY,element:indicators[indicators.length-1]});
        return el;
    }
const handleDrag=(e,card)=>{
    e.dataTransfer.setData('cardId',card.id)

}
const handleDragOver=(e)=>{
    e.preventDefault();
    handelLightInd(e)
    setActive(true)
}
const handleDragLeave=()=>{
setActive(false);
clearHighlight()
}
const handleDropEnd=(e)=>{
    setActive(false)
    clearHighlight(false);
    const cardId=e.dataTransfer.getData('cardId')
    const indicator=getInd();
    const {element}=getNearestInd(e,indicator);
    let bef=element.dataset.before|| "-1";
    if(bef!=cardId){
        let cp=[...cards];
        let grabbedCard=cards.find(crd=>crd.id===cardId)
        if(!grabbedCard) return;
        grabbedCard={...grabbedCard,column}
        cp=cp.filter(crd=>crd.id!==cardId)
        const moveToBack=bef==="-1";
        if(moveToBack){
            cp.push(grabbedCard);
        }else{
            const insertAtIndex=cp.findIndex(el=>el.id===bef)
            if(insertAtIndex===undefined) return
            cp.splice(insertAtIndex,0,
                grabbedCard
            )
            setCards(cp)
        }
    }
    
  

}
  return (
    <div className={`$ w-56 shrink-0`}>
        <div className='mb-3 flex items-center justify-between'>
            <h3 className={` font-medium ${headingColor}`}>{title}
            </h3>
            <span className=' text-sm text-white bg-orange-500/30 px-3'>{filtercards.length}</span>
        </div>
        <div onDragOver={handleDragOver} 
        onDragLeave={handleDragLeave}
        onDrop={handleDropEnd}
         className={`  h-full w-full transition-colors ${active?"bg-neutral-800/50":"bg-neutral-800/0"}`}>
            {
                filtercards.map(card=>(
                    <Card key={card.id} {...card} handleDrag={handleDrag}/>
                ))
            }
            <DropIndicator beforeId={"-1"} column={column}/>
            <AddCard column={column} setCards={setCards} />
        </div>
    </div>
  )
}

export default Column