import React, {useState, useEffect, useRef} from 'react'
import Table from '../components/Table.js'

const DataOutput = () => {

  const sources = [
    "API",
    "Database",
    "File"
  ]

  const[source, setSource] = useState("API")
  const inputRef = useRef("")
  const [data, setData] = useState()
  const [sourceInput,setSourceInput] = useState("https://jsonplaceholder.typicode.com/users")

  const getData=()=>{
      var url = sourceInput
      fetch(url).then(response => {
        return response.json()
      }).then(data => {
        setData(data)
      })
    }

  useEffect(()=>{
    getData();
  },[])


  return (
    <div className="container">
      <h1>Data Output</h1>
      <div className="row">
        <div className="col-2">

          <div className="form-group mb-3">
              <label>Source: </label>
              <select 
                className="form-control mb-3"
                onChange ={(e)=>setSource(e.target.value)}
              >
                {
                  sources.map(option=>(
                    <option key={sources.indexOf(option)}>{option}</option>
                  ))
                }
              </select>
          </div>
        </div>
        <div className="col-5"></div>
      </div>

      <div className="row">
        <div className="col-6 form-group mb-3">
          {   
          source == "API"?
            <label>URL: </label>
          :
          source == "Database"? 
            <label>Table Name: </label>
          :
            <label>File Path: </label>
          }
          <input ref={inputRef} className="form-control"></input>
          
        </div>

        <div className="col">
          <div className="btn btn-primary w-25 mt-4">Get Data</div>
        </div>

      </div>
      
    </div>
  )
}

export default DataOutput