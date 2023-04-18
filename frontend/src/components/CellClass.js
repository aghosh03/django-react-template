export class Cell {
    constructor(row_letter, column_number){
        this.value = ""
        this.name = "cell"
        this.row = String(row_letter);
        this.column = String(column_number);
        this.address = this.row+this.column;
        this.height = 12;
        this.width = 20;
        this.borderTop ={
            color: "lightgray",
            width: 1,
            style: "solid",
        };
        this.borderBottom ={
            color: "lightgray",
            width: 1,
            style: "solid",
        }
        this.borderLeft ={
            color: "lightgray",
            width: 1,
            style: "solid",
        }
        this.borderRight ={
            color: "lightgray",
            width: 1,
            style: "solid",
        }
        this.wrapping = "none";
        this.textHorizontalPosition = "left";
        this.textVerticalPosition = "middle";
        this.font = {
            style : "arial",
            height: 12,
            color: "black",
            italic: false,
            bold: false,
            underline: false,
        };
        this.formula = ""
    }

    calculate(){
        if (this.value.charAt(0)=="="){
            eval(this.formula)
        }
    }
}

