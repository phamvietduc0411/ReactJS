import { useState } from 'react'
import './App.css'
import Clock from './Clock'
import BareInput from './BareInput'
import PropsChild from './PropsChildren'
import HandleEvent from './HandleEvent'

function App() {
  //const [visible, setVisible] = useState(true)
  return (
    <div className='App'>
      {/* (<button onClick={() => setVisible(false)}>Unmount</button>){visible && <Clock />} */}
      {/* <BareInput type='text' value='100' autoFocus className='input' /> */}
      {/* <PropsChild>
        <h1>Props Children</h1>
        <BareInput type='text' value='100' autoFocus readOnly className='input' />
      </PropsChild> */}
      <HandleEvent />
    </div>
  )
}

export default App
