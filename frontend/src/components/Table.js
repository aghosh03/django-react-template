import React, {useEffect, useState} from 'react'
import {proper} from './StringCase.js'

const Table = () => {

    const data2 =[
        {name:"John", email:"john@gmail.com", age:25},
        {name:"Mary", email:"Mary@gmail.com", age:18},
        {name:"Steve", email:"steve@gmail.com", age:21},
        {name:"Sally", email:"sally@gmail.com", age:28}
    ]

    const data=props.data


    const TableStyle = {
        fontFamily: "arial",
        borderCollapse: "collapse",
        width: "100%",
        maxHeight: "500px",
        overflow: "scroll"
      }
      
      const tdStyle = {
        border: "1px solid lightgray",
        textAlign: "left",
        padding: "10px"
      }

      const thStyle = {
        border: "1px solid lightgray",
        textAlign: "left",
        padding: "10px",
        background: "steelblue",
        color: "white"
      }

      const trStyle = {
        height: "20px"
      }

      const [tableData, setTableData] = useState(data);
      const [headers, setHeaders] = useState(Object.keys(data[0]));
      
      
  return (
    <div>
        <table style={TableStyle}>
            <thead>
                <tr style={thStyle}>
                {headers.map(field=>(
                    <td key={headers.indexOf(field)} style={thStyle}>{proper(field.replace(["_"," "]))}</td>
                ))}
                </tr>
            </thead>
            <tbody>
                {tableData.map(row=>(
                    <tr key={tableData.indexOf(row)} style={trStyle} >
                        {headers.map(field=>(
                        <td key={headers.indexOf(field)} style={tdStyle}>{String(row[field])}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table