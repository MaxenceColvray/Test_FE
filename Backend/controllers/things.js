const things = require('../models/things')

exports.postuser = (req, res, next) => {
    // User.findOne({ _id: req.auth.userId })
    //     .then((user) => {
    //         const post = new Post({
    //             name: user.name,
    //             userId: req.auth.userId,
    //             title: req.body.title,
    //             description: req.body.description,
    //             imageURL: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
    //             likes: 0,
    //             usersLiked: []
    //         })
    //         console.log(post)
    //         post.save()
    //             .then(() => res.status(201).json({ message: 'Post créé' }))
    //             .catch(error => res.status(400).json({ error }))
    //     })
    //     .catch(error => res.status(400).json({ error }));
};