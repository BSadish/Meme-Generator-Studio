import React, { useEffect, useRef, useState } from 'react'

const MemeTemplateSelector = ({onImageSelect}) => {

  const [imageSrc, setImagesrc]=useState(null);

const fileinputref=useRef(null)

const handleclick=()=>{
fileinputref.current.click();

}

const handlefilechange=(event)=>{
const file=event.target.files[0];
if(file){

    const reader= new FileReader();
    reader.onloadend=()=>{
      
      onImageSelect(reader.result);
      localStorage.setItem('uploadedImage',reader.result)
    };
    reader.readAsDataURL(file);
}
}

useEffect(()=>{
  const savedImage=localStorage.getItem('uploadedImage');
  if(savedImage){
    setImagesrc(savedImage)
  }
},[])



  return (
    <div >
      
        <button  onClick={handleclick} className='border-2 rounded-[5px] p-1 m-10 bg-blue-500 font-bold cursor-pointer'>Upload File</button>
      <input type="file" ref={fileinputref} onChange={handlefilechange} style={{display:"none"}}/>
      {imageSrc && <img src={imageSrc} alt="selected files"/>}
    </div>
  )
}

export default MemeTemplateSelector
