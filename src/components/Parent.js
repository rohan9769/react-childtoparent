import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const[data,setData] = useState('')
    const[name,setName] = useState('')
    const[toggled,setToggled] = useState(false)
    const[age,setAge] = useState('')

    const ageToChild = (ageData) =>{
        setAge(ageData)
    }
    const childToParent = (childData) =>{
        setData(childData)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        alert(`Age is ${age} , Form Submitted`)
        console.log(`Name is ${name} and Age is ${age}`)
    }
  return (
    <>
        {data}
        <div>
            {/* <Child childToParent={childToParent}></Child> */}
            <form onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}></input>
                <button type='button' onClick={()=>setToggled(!toggled)}>Age ?</button>
                {toggled && <Child childToParent={childToParent} ageToChild={ageToChild}></Child>}
                <button type='button'>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Parent