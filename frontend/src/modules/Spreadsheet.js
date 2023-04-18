import React from 'react'
import Cell from "../components/CellClass.js"

const Spreadsheet = () => {

  var number_of_rows= 30;
  var number_of_columns= 15;
  var spreadsheet = [];

  for (let r = 1; r<= number_of_rows; r++){
    var columns = [];
    for (let c = 1; c<= number_of_columns; c++){
      newCell = new Cell(r,c);
      columns.push(newCell);
    }
    spreadsheet.push(columns)
  }

  const rowStyle = {
    display: "block",
    height: 15,
    width: "100%",
  }

  const colStyle = {
    width: 30,
  }

  const formulaBarStyle = {
    display: "block",
    width: "100%",
    border: "1px solid lightgray",
    marginBottom: "10px",
    padding: "10px"
  }

  return (
    <div className="container">
        <h1>Spreadsheet</h1>
        <div>
          <textarea style={formulaBarStyle}></textarea>
        </div>
        <div style={{height: "500px", width: "1000px", border: "2px solid lightgray", overflow:"scroll"}}>
          {spreadsheet.map(row=>{
            <div key ={spreadsheet.indexOf(row)+1} style={rowStyle}>
              {row.map(cell=>{
                <Cell
                  key ={row.indexOf(cell)+1}
                  rowNumber = {spreadsheet.indexOf(row)+1} 
                  colNumber = {row.indexOf(cell)+1}
                  height = {rowStyle.height}
                  width  = {colStyle.width}
                />
              })}
            </div>
          })}
        </div>
    </div>
  )
}

export default Spreadsheet