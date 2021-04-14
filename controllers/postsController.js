const {Post} = require("../models");

const postsController = {
    index: async (req, res) => {
        const posts = await Post.findAll();
        return res.json(posts);
    },

    create: async (req, res) => {
        const {texto, img, usuarios_id, n_likes} = req.body; 

        const post = await Post.create({
            texto,
            img,
            usuarios_id,
            n_likes
        });

        return res.json(post);
    },

    update: async (req, res) => {
        const {id} = req.params;
        const {texto, img, usuarios_id, n_likes} = req.body; 

        const post = await Post.update({
            texto,
            img,
            usuarios_id,
            n_likes
        }, {
            where: {id}
        });

        return res.json(post);
    },

    delete: async (req, res) => {
        const {id} = req.params;
        
        const post = await Post.destroy({
            where: {id}
        });

        return res.json(post);
    }

}

module.exports = postsController;