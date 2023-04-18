import React, {useState, useLayoutEffect, useRef, useEffect} from 'react'
import InputGroup from '../components/InputGroup.js'
import Dropdown from '../components/Dropdown.js'
import FormatValue from '../components/FormatValue.js'
import UnitFormat from '../components/UnitFormat.js'

const ValueCalculation = () => {
  
  const industryData = require('../../../backend/standard_data/industry_benchmarks.json')
  const currencyData = require('../../../backend/standard_data/currencies.json')

  var industryList = []
  industryData.map((record)=>{
    var x = record.Industry;
    industryList.push(x)
  })

  var currencies = []
  currencyData.map((record)=>{
    var x = record.currency;
    currencies.push(x)
  })
  var currencyList = Array.from(new Set(currencies)).sort()


  const [industry, setIndustry] = useState(industryList[8]);
  const [currency, setCurrency] = useState(currencyList.find(x=>x==="US Dollar"));
  const [currencyCode, setCurrencyCode] = useState(currencyData.find(x=>x.currency===currency).currency_code)
  
  const [revenue, setRevenue] = useState(1000000000);
  
  const [addressableSpendPct, setAddressableSpendPct] = useState(0.15);
  const [addressableSpend, setAddressableSpend] = useState(0.15*revenue);
  
  const [savingsPct, setSavingsPct] = useState(0.03);
  const [savings, setSavings] = useState(savingsPct*addressableSpend);

  useLayoutEffect(()=>{
    setCurrencyCode(currencyData.find(x=>x.currency==currency).currency_code)
    parseFloat(setAddressableSpendPct(industryData.find(r=>r.Industry==industry).Addressable_Spend_Pct_Of_Revenue))
    setAddressableSpend(addressableSpendPct*revenue)
    setSavings(addressableSpend*savingsPct)
  })


  return (
    <div className="row">

      <div className="col-2"></div>
      
      <div className="col-5">
        <form>

        <Dropdown 
          label="Industry"
          value={industry}
          onChange={(e)=>setIndustry(e.target.value)}
          list={industryList}
        />

        <Dropdown 
          label="Currency"
          value={currency}
          onChange={(e)=>setCurrency(e.target.value)}
          list={currencyList}
        />

        <InputGroup
          label="Revenue"
          name="revenue"
          format="decimal"
          currencyCode={currencyCode}
          defaultValue={UnitFormat(revenue, "decimal")}
          setState = {setRevenue}
        />
        

        </form>
    </div>

    <div className="col-4">
        
        
        <div className="row h-25 text-center">
            <h6 style={{color: "gray"}}>Adressable Spend</h6>
            <h2 style={{color: "steelblue"}}>{(addressableSpendPct*100).toFixed(1)}%</h2>
            <p style={{color: "gray"}}>of revenue</p>
        </div>
        <div className="row h-50"></div>
        <div className="row h-25 text-center">
            <h6 style={{color: "gray"}}>Annual Savings</h6>
            <h2 style={{color: "green"}}>{FormatValue(savings, "currency-decimal", currencyCode)}</h2>
            <p style={{color: "gray"}}>({(savingsPct*100).toFixed(1)}% of spend)</p>
        </div>
    </div>
    <div className="col"></div>
    </div>
  )
}
export default ValueCalculation
