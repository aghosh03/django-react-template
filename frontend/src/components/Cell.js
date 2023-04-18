import React, {useState} from 'react'

const Cell = (props) => {

  const rowNumber = props.rowNumber
  const colNumber = props.colNumber
  const address = String(rowNumber)+String(colNumber)

  const cellStyle = {
    display: "inline",
    height: props.height,
    width: props.width,
    outline: "none",
    border: "none",
    border: "1px solid lightgray",
    padding: 5,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "white"
  }

  const calculate = (elem)=>{
    if (String(elem.value).charAt(0)=="="){
        elem.value = eval(this.formula)
    }
    else{
        elem.value = elem.value
    }
  }

  return (
    <textarea 
        style = {cellStyle}
        onBlur = {(e)=>calculate(e.target)}
    >
    </textarea>
  )
}

export default Cell



