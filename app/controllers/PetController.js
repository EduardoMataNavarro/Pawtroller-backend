const Pet = require('../models/Pet');
//const MediaUpload = require('../utils/MediaUpload');

/* 
    Enviar un correo
*/

const PetController = {};

PetController.Index = async (req, res) => {
    const pets = await Pet.find({});
    res.json(pets);
};

PetController.Create = async (req, res) => {
    const { name, nickname, age, birthdate, ownerId, pettype } = req.body;
    const newPet = new Pet({
        Name: name,
        Nickname: nickname,
        Age: age,
        Birthdate: birthdate,
        Owner: ownerId,
        PetType: pettype
    });
    await newPet.save();
    res.json(newPet);
};

PetController.AddMedia = async (req, res) => {
    const { id, mediaType } = req.body;
    const { media } = req.file;
    if (mediaType == 'image') {

        const uploadObject = MediaUpload('pawtroller-images');
        const singleUpload = uploadObject('image');
        /*
        singleUpload(req, res, function (err) {
            if (err) {
                res.send({ error: err });
            } else {

                const pet = Pet.findById(id);
                pet.ImagePaths.push(req.file.location);
                await pet.save();

                res.send({ message: req.file.location });
            }
        });
        */
    }
    if (mediaType == 'video') {

    }
};

PetController.GetById = async (req, res) => {
    const { id } = req.body;
    const pet = await Pet.findById(id);

    res.json(pet);
};

PetController.GetByLostDateRange = async (req, res) => {
    const { startDate, endDate, limit } = req.query;
    const pets = await Pet.find({
        Status: {
            Status: 'Perdido',
            StatusDate: {
                $gte: startDate,
                $lte: endDate
            }
        }
    }).limit(limit);

    res.json(pets);
};

PetController.GetLostNearby = async (req, res) => {
    const { lng, lat } = req.query;
    const nearPets = await Pet.geoNear({
        type: 'Point',
        coordinates: [parseFloat(lng), parseFloat(lat)]
    },
        {
            maxDistance: 20000,
            spherical: true
        }
    ).limit(16);

    res.json(nearPets);
};

module.exports = PetController;