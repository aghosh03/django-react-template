const UnitFormat = (inputValue, format) => {

    let formatted_value=String(inputValue)
    let returned_value = formatted_value
    let unit = ''
    let digits = 2

    if(format == "text"){ 
        returned_value = formatted_value
        return returned_value
    }

    
    let multiplier = 1
    if (formatted_value.search("T")>0 || formatted_value.search("t")>0){
        multiplier = 1000000000000
    }
    else if (formatted_value.search("B")>0 || formatted_value.search("b")>0){
        multiplier = 1000000000
    }
    else if (formatted_value.search("M")>=0 || formatted_value.search("m")>0){
        multiplier = 1000000
    }
    else if (formatted_value.search("K")>=0 || formatted_value.search("k")>0){
        multiplier = 1000
    }
    else{
        multiplier = 1
    }

    var numerical_value = parseFloat((formatted_value).replace(/[^0-9.]/g,'') || 0)*multiplier

    if(numerical_value>=1000000000000){
        formatted_value=(numerical_value/1000000000000)
        unit = "T"
    }    

    else if(numerical_value>=1000000000){
        formatted_value=(numerical_value/1000000000)
        unit = "B"

    }
    else if(numerical_value>=1000000){
        formatted_value=(numerical_value/1000000)
        unit = "M"

    }
    else if(numerical_value>=1000){
        formatted_value=(numerical_value/1000)
        unit = "K"

    }
    else{
        formatted_value=(numerical_value)
        unit = ""
        digits = 0
    }


    if(format == "integer"){
        returned_value = String((formatted_value).toFixed(digits))+unit
        return returned_value
    }

    if(format == "decimal"){
        returned_value = String((formatted_value).toFixed(digits))+unit
        return returned_value
    } 


}

export default UnitFormat