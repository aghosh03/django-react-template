import React from 'react'
import UnitFormat from './UnitFormat.js'
import ConvertToNumber from './ConvertToNumber.js'

const InputGroup = (props) => {


  const updateValue = (elem)=>{
    if(props.format != "text" || props.format !="email"){
      props.setState(ConvertToNumber(elem.value))
      elem.value = UnitFormat(ConvertToNumber(elem.value), props.format)
    }
    else{
      props.setState(elem.value)
      elem.value = elem.value
    }
  }

  return (
    <div className="form-group mb-3">
        {props.currencyCode || props.currencyCode !="" ? 
          <label>{props.label} ({props.currencyCode})</label>
          :
          <label>{props.label}</label>
        }
            <input
                className="form-control"
                type="text"
                name={props.name}
                defaultValue={props.defaultValue}
                onChange={(e)=>props.setState(ConvertToNumber(e.target.value))}
                onBlur={(e)=>updateValue(e.target)}
            >
        </input>
    </div>
  )
}

export default InputGroup