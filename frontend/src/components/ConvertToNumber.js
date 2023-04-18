const ConvertToNumber = (inputValue) => {
    
    inputValue = String(inputValue)
    
    let multiplier = 1

    if (inputValue.search("T")>0 || inputValue.search("t")>0){
        multiplier = 1000000000000
    }
    else if (inputValue.search("B")>0 || inputValue.search("b")>0){
        multiplier = 1000000000
    }
    else if (inputValue.search("M")>=0 || inputValue.search("m")>0){
        multiplier = 1000000
    }
    else if (inputValue.search("K")>=0 || inputValue.search("k")>0){
        multiplier = 1000
    }
    else{
        multiplier = 1
    }

    var numerical_value = parseFloat((inputValue).replace(/[^0-9.]/g,'') || 0)*multiplier

    return numerical_value
}

export default ConvertToNumber
