import React from 'react'
import MemeTemplateSelector from './components/MemeTemplateSelector'
import MemeCanvas from './components/MemeCanvas';

const App = () => {

  const [setlectedImage, setSelectedImage]=useState(null)

  return (
    <div className=''>
    <MemeTemplateSelector onImageSelect={setSelectedImage}/>
    {setlectedImage && <MemeCanvas imageSrc={setlectedImage}/>}
    </div>
  )
}

export default App
