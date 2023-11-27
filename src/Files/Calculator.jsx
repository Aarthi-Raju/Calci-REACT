import React, { useState } from 'react'
import './Calculator.css'

function Calculator() {
    const [input, setInput] = useState("")
    const [show,setShow] = useState("")
    const [result, setResult] = useState(0)
    const [state,setState] = useState(false)
    const updateResult = ()=>{
        setState(true)
        try{
            setResult(eval(input))
        }
        catch(error){
            setResult("Syntax Error")
            document.getElementById("typing").style.color="red"
        }
    }
    const updateInput = (value) =>{
        setState(false)
        setInput(input+value)
        if(["+","-","/","*"].includes(value)){
            setShow("")
        }
        else{
            setShow(show+value)
        }
    }
    return (
        <div className='calci'>
            <div className='output'>
                <div className='typed'>{input}</div>
                {state ? <div className='typing' id='typing'>{result}</div> : <div className='typing' id='typing'>{show}</div> }
            </div>
            <div className='number_pannel'>
                <div className='trio'>
                    <button className='ac' id='symbol' onClick={()=>{setInput("");setShow("")}}>AC</button>
                    <button className='del' id='symbol' onClick={()=>{setInput(input.slice(0,-1));setShow(show.slice(0,-1))}}>DEL</button>
                    <button className='divide' id='symbol' onClick={()=>updateInput('/')}>/</button>
                </div>
                <div className='quart'>
                    <button className='one' onClick={()=>updateInput(1)}>1</button>
                    <button className='two' onClick={()=>updateInput(2)}>2</button>
                    <button className='three' onClick={()=>updateInput(3)}>3</button>
                    <button className='mul' id='symbol' onClick={()=>updateInput('*')}>*</button>
                    <button className='four' onClick={()=>updateInput(4)}>4</button>
                    <button className='five' onClick={()=>updateInput(5)}>5</button>
                    <button className='six' onClick={()=>updateInput(6)}>6</button>
                    <button className='plus'id='symbol'  onClick={()=>updateInput('+')}>+</button>
                    <button className='seven' onClick={()=>updateInput(7)}>7</button>
                    <button className='eight' onClick={()=>updateInput(8)}>8</button>
                    <button className='nine' onClick={()=>updateInput(9)}>9</button>
                    <button className='minus' id='symbol' onClick={()=>updateInput('-')}>-</button>
                </div>
                <div className='trio'>
                    <button className='decimal' onClick={()=>updateInput('.')}>.</button>
                    <button className="zero" onClick={()=>updateInput(0)}>0</button>
                    <button className='equal'id='symbol' onClick={()=>updateResult()}>=</button>
                </div>
            </div>
        </div>
    )
}

export default Calculator
