const axios = require('axios');
const Lead = require('../models/Lead');

module.exports = {
    async store(req, res) {
        const { lead } = req.body;
        
        const newLead = await Lead.create(lead).catch(error => {
            return res.status(400).json({
                success: false,
                code: error.code,
                message: error.message
            });
        });

        return res.status(201).json({
            success: true,
            body: newLead
        });
    },

    async index(req, res) {
        const leads = await Lead.find({});
        return res.json(leads);
    },

    async update(req, res) {
        const { id } = req.params;
        const { user } = req.body;
        const updateLead = await Lead.findByIdAndUpdate(id, user);
        return res.json(updateLead);
    },

    async user(req, res) {
        const { id } = req.params;
        const findLead = await Lead.findById(id);
        return res.json(findLead);
    },
    
    async newLeads(req, res) {
        const leads = await Lead.find({ $or: [ { responsible: null }, { status: 'Retornar' } ] });
        try{
            return res.json(leads);
        }
        catch (error) {
            console.log(error)
        }
    }
};
