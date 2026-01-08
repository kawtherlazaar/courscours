import React from 'react'

function Greetings({name1},onClick) {
  return (
    <div>
        hello ! {name1}
        <button onClick={() => alert(`Welcome ${name1} to our website`)}> Greet Me </button>
    </div>
  )
}

export default Greetings