import React from 'react'

const Child = ({childToParent,ageToChild}) => {
    const data = "This is some data from the child component to parent"
    

  return (
    <>
        <button onClick={()=>childToParent(data)}>Click Child</button>
        <label>Age : </label>
        <input type='text' onChange={(e)=>ageToChild(e.target.value)}></input>
    </>
  )
}

export default Child