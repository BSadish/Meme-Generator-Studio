import React from 'react'

const MemeCanvas = ({imageSrc}) => {
  return (
    <div>
       <h2 className="font-bold text-lg mb-2">Meme Canvas</h2>
       <img src={imageSrc} alt="Meme" className="max-w-full max-h-[500px]" />
    </div>
  )
}

export default MemeCanvas
