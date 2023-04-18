import React from 'react'

const path = require('path')

const { engine } = require('express-handlebars');
const logger = require('./middleware/logger');
const sample_data = require('./SampleData');
let context = {}

const express = require('express')
const app = express();

//Body parser middleware (for sending back data in html)
app.use(express.json());
app.use(express.urlencoded({extended: false}));


// Run python apps
const runPython = require('./apps/runPython.js');
app.use('/runPython/:appName',(req,res,next)=>{
    console.log(req.body)
    console.log(`initiating Python...`)
    var inputData = JSON.stringify(req.body);
    var appName = req.params.appName
    const result = runPython.run_python_script(inputData, appName);
    context = JSON.parse(result)
    console.log('Python result:')
    console.log(context)

    res.status(200).render('calculate_savings',{context});
    next
});

app.use('/runPython2', require('./apps/pythonRouter'))



const ModuleTemplate1 = () => {
  return (
    <div>
      <h3>Python App Test</h3>

    </div>
  )
}

export default ModuleTemplate1