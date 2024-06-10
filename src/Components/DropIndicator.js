import React from 'react'

const DropIndicator = ({beforeId,column}) => {
  return (
    <div data-before={beforeId || "-1"} data-column={column}
     className=' my-0.5 h-0.5 w-full bg-red-400 opacity-0'></div>
  )
}

export default DropIndicator