const customerService = require('../services/customerService.js');

const getPost = async (req, res) => {
    return await customerService.getCustomer(req, res);
};

const getPostById = async (req, res) => {
    return await customerService.getCustomerById(req, res);
};


const createPost = async (req, res) => {
    return await customerService.createCustomer(req, res);
};

module.exports = {
    createPost,
    getPost,
    getPostById
}