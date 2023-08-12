const customer = require('../models').Customer;
const se = require('sequelize')

const getCustomer = async (req, res) => {
    const posts = await customer.findAll();

    return res.status(200).json({posts});
};

const getCustomerById = async (req, res) => {

    //se.Model.findOne({where: {id: req.params.id}})
    const post = await customer.findOne({where: {id: req.params.id}});
    return res.status(200).json({post});
};

const createCustomer = async (req, res) => {
    try{
        const post = await customer.create({
            name: req.body.name,
            age: req.body.age
        });

        return res.status(200).json({post});
    }catch (e) {
        return res.status(500).send(e.message);
    }
}

module.exports = {
    createCustomer,
    getCustomer,
    getCustomerById
}