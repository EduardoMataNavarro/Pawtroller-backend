const express = require("express");
const router = express.Router();


const {
    getAllPost,
    getPost,
    addPost,
    updatePost,
    deletePost
} = require('../controllers/PostController');

router.get('/',getAllPost);
router.get('/:id',getPost);
router.post('/',addPost);
router.put('/',updatePost);
router.delete('/:id',deletePost)


module.exports = router;