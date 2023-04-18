import React, {useEffect, useState} from 'react'
import BasicForm from './modules/BasicForm'
import ValueCalculation from './modules/ValueCalculation'
import DataOutput from './modules/DataOutput'

const App = () => {

  const moduleList = [
    "Value Calculation",
    "Basic Form",
    "Data Table"
  ]

  const [selectedModule, setSelectedModule] = useState("ValueCalculation")

  const changeModule = (modulename)=>{
    setSelectedModule(modulename)
  }

  const showPointer = (elem)=>{
    elem.style.cursor="pointer"
  }
 
  return (
    <div>
      <ul className="nav nav-pills mb-5">
       {
        moduleList.map(module=>(
          
          <li className="nav-item p-3">
            <div className="nav-link"
              key={moduleList.indexOf(module)}
              onClick={(e)=>changeModule(e.target.innerHTML)}
              onMouseOver ={(e)=>showPointer(e.target)}
              >
                {module}
            </div>
          </li>
        ))
       }
      </ul>
      <div>
        { 
          selectedModule === "Basic Form" ? <BasicForm/> :
          selectedModule === "Value Calculation" ? <ValueCalculation /> :
          selectedModule === "Data Table" ? <DataOutput /> :
          <ValueCalculation/>
        }
      </div>
      
    </div>
  )
}

export default App
