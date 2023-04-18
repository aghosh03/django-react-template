const express = require('express');
const uuid = require('uuid')
const router = express.Router();
const members = require('../../Members')

//Gets all members
router.get('/', (req, res)=>{
    console.log(req.body)
    res.json(members);
})

// Get single member
router.get('/:id', (req, res)=>{
    console.log(req.body)
    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found){
        // res.json(members.filter(member => member.id===parseInt(req.params.id)));
        res.redirect('/',{members: members.filter(member => member.id===parseInt(req.params.id))});
    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
    
    
})

//Create member
router.post('/',(req,res)=>{

    const newMember = {
        id: uuid.v4(),
        name: req.body.name,
        email: req.body.email,
        status: 'active'
    }

    console.log(`Adding new member ${req.body.name}`)

    if(!newMember.name || !newMember.email){
        return res.status(400).json({msg: 'Please include a name and email'});
    }

    members.push(newMember);
    //Note: for actual obj oriented databases like Mondo or SQLizer use member.save(newMember);

    // res.json(members);
    res.redirect('/');
});

//Update member
router.put('/:id', (req, res)=>{
    
    console.log(`Updating ${req.body.name}`)

    const found = members.some(member => member.id ===parseInt(req.params.id));
    if(found){
        const updMember = req.body;

        //Note: for actual obj oriented databases like Mondo or SQLizer use member.save(newMember);
        members.forEach(member =>{
            if(member.id === parseInt(req.params.id)){
                member.name = updMember.name ? updMember.name: member.name;
                member.email = updMember.email ? updMember.email: member.email;
                res.json({msg: 'Member updated', member});
            }
        });

        // res.json(members.filter(member => member.id===parseInt(req.params.id)));

        res.redirect('/');

    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
})

// Delete single member
router.delete('/:id', (req, res)=>{

    console.log(`Deleting ${req.body.name}`)

    const found = members.some(member => member.id ===parseInt(req.params.id));
    const member_to_delete = `${req.params.id}`
    if(found){
        // res.json({msg: `Member ${member_to_delete} deleted`, remaining_members: members.filter(member => member.id !== parseInt(req.params.id))});
        res.redirect('/',{members: members.filter(member => member.id !== parseInt(req.params.id))});
    } else {
        res.status(400).json({msg:`No member with the id of ${req.params.id}`})
    }
    
})

module.exports = router;