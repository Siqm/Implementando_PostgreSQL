const Role = require("../models/Role");

module.exports = {
    async index (req, res) {
        const roles = await Role.findAll();

        return res.json(roles);
    },
    
    async store (req, res) {
        const { name, extensionNumber } = req.body;

        const [ role ] = Role.findOrCreate({
            where: {name, extensionNumber}
        })
    }
}