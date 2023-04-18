const express = require('express');
const uuid = require('uuid')
const router = express.Router();
const records = require('../data/Members')

//Read all records
router.get('/', (req, res)=>{
    res.json(records);
})

// Read single record
router.get('/:id', (req, res)=>{
    const found = records.some(record => record.id ===parseInt(req.params.id));
    if(found){
        res.json(records.filter(record => record.id===parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`No record with the id of ${req.params.id}`})
    }
    
})

//Create record
router.post('/',(req,res)=>{
    const newRecord = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    if(!newRecord.name || !newRecord.email){
        return res.status(400).json({msg: 'Please provide all required data'});
    }

    newRecord.push(newRecord);
    //Note: for actual obj oriented databases like Mondo or SQLizer use member.save(newMember);

    res.json(records);
});

//Update record
router.put('/:id', (req, res)=>{
    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found){
        const updRecord= req.body;

        //Note: for actual obj oriented databases like Mondo or SQLizer use member.save(updRecord);
        records.forEach(member =>{
            if(record.id === parseInt(req.params.id)){
                record.name = updRecord.name ? updRecord.name: record.name;
                record.email = updRecord.email ? updRecord.email: record.email;
                res.json({msg: 'Record updated', record});
            }
        });
        res.json(records.filter(record => record.id===parseInt(req.params.id)));
    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
})

// Delete record
router.delete('/:id', (req, res)=>{
    const found = records.some(record => record.id == req.params.id);
    const record_to_delete = `${req.params.id}`
    if(found){
        res.json({msg: `Member ${record_to_delete} deleted`, remaining_records: records.filter(record => record.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
    
})

module.exports = router;