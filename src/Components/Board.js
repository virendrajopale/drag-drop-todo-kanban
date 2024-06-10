import React, { useEffect, useState } from 'react'
import Column from './Column'
import { DEFAULT_CARDS } from '../Data/Default-data'
import Barrell from './Barrell'

const Board = () => {
    const [cards,setCards]=useState(DEFAULT_CARDS)
    const [hasChecked,setHasChecked]=useState(false)
    //for persist vlaue
    // useEffect(()=>{
    //     hasChecked && localStorage.setItem('cards',JSON.stringify(cards))
    // },[cards])
    
    // useEffect(()=>{
    //     const cardData=localStorage.getItem('cards');
    //     setCards(cardData?JSON.parse(cardData):[]);
    //     setHasChecked(true)
    // },[])
  return (
    <div className=' flex flex-col  md:flex-row  h-full w-full gap-3 overflow-scroll p-12'>
    <Column 
    title={'Backlog'}
    column={'backlog'}
    headingColor={' text-neutral-500'}
    cards={cards}
    setCards={setCards}
    />
     <Column 
    title={'TODO'}
    column={'todo'}
    headingColor={' text-yellow-200'}
    cards={cards}
    setCards={setCards}
    />
     <Column 
    title={'In progress'}
    column={'doing'}
    headingColor={' text-blue-300'}
    cards={cards}
    setCards={setCards}
    />
     <Column 
    title={'Complete'}
    column={'done'}
    headingColor={' text-emrland-500'}
    cards={cards}
    setCards={setCards}
    />
    <Barrell setCards={setCards}/>
    </div>
  )
}

export default Board