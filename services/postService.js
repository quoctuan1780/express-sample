const post = require('../models').Post;

const getPost = async (req, res) => {
    const result = await post.findAll();

    return res.status(200).json({result});
};

const getPostById = async (req, res) => {

    const result = await post.findOne({where: {id: req.params.id}});
    return res.status(200).json({result});
};

const createPost = async (req, res) => {
    try{
        const result = await post.create({
            title: req.body.title,
            content: req.body.content,
            imageUrl: req.body.imageUrl
        });

        return res.status(201).json({result});
    }
    catch(e){
        return res.status(500).send(e.message);
    }
}

module.exports = {
    createPost,
    getPost,
    getPostById
}