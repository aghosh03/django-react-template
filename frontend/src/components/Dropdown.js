import React from 'react'

const Dropdown = (props) => {

  return (
        <div className="form-group mb-3">
            <label>{props.label}</label>
            <select
                className="form-control"
                value={props.value}
                onChange={props.onChange}
            >
                {
                    props.list.map(item=>(
                        <option key={props.list.indexOf(item)} value={item}>{item}</option>
                    ))
                }
            </select>
        </div>
  )
}

export default Dropdown
