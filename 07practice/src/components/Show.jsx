

import React from 'react'

function Show({onClick}) {

  console.log("Show Rerenders")
  return (
    <button onClick={onClick}>Click Me</button>
  )
}

export default React.memo(Show);
