const Role = require("../models/Role");
const User = require('../models/User')

module.exports = {
    async index (req, res) {
        const roles = await Role.findAll();

        return res.json(roles);
    },
    
    async store (req, res) {
        const { user_id, name, extensionNumber } = req.body;


        const [ role ] = Role.findOrCreate({
            where: {name, extensionNumber}
        })

        return res.josn(role);
    }
}