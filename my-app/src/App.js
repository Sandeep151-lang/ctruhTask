
import './App.css';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 const [color, setColor] = useState('#ff000066');
 const [digit,setDigit] = useState("0")
 const [line,setLine] = useState()
 const [lineX,setLineX] = useState()

 const styleX = {
  transform : `rotate(${line===180 ? 90 : 180}deg)`,
 }
 const styleY = {
  transform : `rotate(${lineX===90 ? 180 : 90}deg)`
 }

 const  hor=()=>{
  setLine(90)
  setLineX(180)
 }
  const  ver=()=>{
  setLine(180)
  setLineX(90)
 }

const digitX={
  transform:`skew(${lineX === 180 ? 0 : 40 }deg)`
}


 

  return (
    <div className="container">
     <div className="container d-flex mt-5">
      <canvas id="myCanvas" className="left_part" width="200" height="100" style={{background:color}}>
      </canvas>
          <h1 className="text-center mt-5 zoom"  style={digitX}>{digit}</h1>
      <div className="mx-3">
      <input className="color-picker" type="color" value={color} onChange={e => setColor(e.target.value)}/>
      <p className="mt-4">
      <input className="input-field form-control"  placeholder="Enter two digit no." type="number" value={digit} onChange={(e) =>{e.target.value.length > 2 ? "": setDigit(e.target.value)}}/>
      </p>
      <div className="line" style={styleX} onClick={()=>ver() }><span >y</span></div>
      <div className="line" style={styleY} onClick={()=>hor() }><span>x</span></div>
      </div>
     </div>
    </div>
  );
}

export default App;
