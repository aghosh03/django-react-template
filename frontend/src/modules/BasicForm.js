import React, {useState} from 'react'
import InputGroup from '../components/InputGroup'

const BasicForm = () => {

   const [name, setName] = useState("John Doe")
   const [email, setEmail] = useState("jdoe@gmail.com")

   const onblur = (elem)=>{
    console.log(`${elem} updated`)
   }

  return (
    <div className="container">
        <main className="row">
            <div className="col"></div>
            <div className="col-8">
                <header>
                    <h3>Basic Form</h3>
                </header>
                <main>
                    <InputGroup 
                        className="form-control"
                        label="Name"
                        format="text"
                        currencyCode=""
                        name={name}
                        value={name} 
                        onChange={(e)=>setName(e.target.value)}
                        onBlur={(e)=>setName(e.target.value)}
                    />
                    <InputGroup 
                        className="form-control"
                        label="Email"
                        format="text"
                        currencyCode=""
                        name={email}
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)}
                        onBlur={(e)=>onblur(e.target)}
                    />
                </main>

                    <button type="submit" className="btn btn-primary mb-3"  value="Submit">Submit</button>
            </div>
            <div className="col"></div>
        </main>
    </div>
  )
}

export default BasicForm