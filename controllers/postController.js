const fs = require('fs');
const uuid = require('uuid');
const path = require('path');
const postService = require('../services/postService.js');

const createPost = async (req, res) => {
    try {
        const file = req.files.image;
        var host = req.get('host');
        var protocol = req.protocol;
        var fileBuffer = fs.readFileSync(file.path);
        const fileName = uuid.v4();
        const extension = path.extname(file.name);
        fs.writeFileSync(`${__dirname}/../public/images/${fileName}${extension}`, fileBuffer);  
        delete req.files;

        req.body.imageUrl = `${protocol}://${host}/images/${fileName}${extension}`;

        return await postService.createPost(req, res);
    } catch (e) {
        return res.status(500).send(e.message);
    }
}

const getPost = async (req, res) => {
    return await postService.getPost(req, res);
};

const getPostById = async (req, res) => {
    return await postService.getPostById(req, res);
};

module.exports = {
    createPost,
    getPost,
    getPostById
}