/* eslint-disable no-irregular-whitespace */
import React,{useState} from 'react'
import ColorPicker from 'react-color-picker'
import 'react-color-picker/index.css'
const ReactColor = () => {
    

    const [color, setColor] = useState("hex", "#121212");
  return (
    <>
       <ColorPicker value={color} onDrag={setColor} />
    </>
  )
}

export default ReactColor