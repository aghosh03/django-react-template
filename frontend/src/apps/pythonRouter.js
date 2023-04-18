const express = require('express')
const router = express.Router();
const runPython = require('./runPython.js');

router.post('/:appName',(req, res)=>{
    console.log(`initiating Python...`)
    var inputData = JSON.stringify(req.body);
    var appName = req.params.appName
    const result = runPython.run_python_script(inputData, appName);
    const context = JSON.parse(result)
    console.log('Python result:')
    console.log(context)
    res.status(200).redirect('/');
 });

module.exports = router