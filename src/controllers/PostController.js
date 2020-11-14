const PostController = {};
const PostModel = require('../models/Post');

PostController.getAllPost = async (req,res)=>{

    const posts = await PostModel.find()
        .sort();

    res.status(200).send(posts);
}

PostController.getPost = async (req,res)=>{
    const post = await PostModel.findById(req.params.id);
    
    res.status(200).send(post);
}

PostController.addPost = async(req,res)=>{

    const {Title,Content,Owner,Category} = req.body;
    const errors = []
    if(!Title)
        errors.push("No se encontro el titulo para el Post");
    if(!Content)
        errors.push("No hay contenido para el post");
    if(!Owner)
        errors.push("El creador del Post no fue encontrado");
    if(!Category)
        errors.push("No se indicó la categoría para el Post");

    if(errors.length > 0)
        res.status(400).send(errors);
    else{
        const newPost = new PostModel({Title,Content,Owner,Category});
        await newPost.save();

        res.status(201).send("Post Creado con exito");
    }
    
}

PostController.updatePost = async(req,res)=>{
    const {Title,Content,Owner,Category} = req.body;
    await PostModel.findByIdAndUpdate(req.params.id, { Title,Content,Owner,Category });

    res.status(200).send("Post Actualizado");
}

PostController.deletePost = async(req,res)=>{

    await PostModel.findByIdAndDelete(req.params.id);

    res.status(204).send("Post Eliminado");
}


module.exports = PostController;