import React, { useState } from 'react'

function Form() {
    let [input,Setinput] = useState("")
    let [data,Setdata] = useState([])
    function fun1(e)
    {
     Setinput(e.target.value)
    }
    function fun2()
    {
        Setdata([...data,input])
    }
  return (
    <div>
        <p>{data}</p>
  <input type='text' placeholder="enter name" name='firstname' onChange={fun1}></input>
  <br/>
  <input type='text' placeholder="enter name" name='lastname' onChange={fun1}></input>
  <button onClick={fun2}> submit</button>
    </div>
  )
}

export default Form