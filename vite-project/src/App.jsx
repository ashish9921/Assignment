import React, { useState } from 'react'
import "./app.css"
export default function App() {
  const [data, setdata] = useState(0)
  const hadelincrement = () => {

    setdata(pre => pre + 1)

  }
  const hadelDecrement = () => {
    if (data > 0) {
      setdata(pre => pre - 1)
    }

  }
  return (

    <>
      <div className='flex1'>
        <button className='buttonall' onClick={hadelincrement}>Increment</button>
        <div className='data'>
          {data}
        </div>
        <button className='buttonall' onClick={hadelDecrement}>Decrement</button>
      </div>
    </>
  )
}
