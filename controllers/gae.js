const Gae = require('../models/Gae');

exports.createGae = (req, res, next) => {
    delete req.body._id;
    const gae = new Gae({
        ...req.body
    });
    gae.save()
        .then(() => res.status(201).json({ message: 'Gae enregistré !', data : req.body }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneGae = (req, res, next) => {
    Gae.findOne({ id: req.params.id })
        .then(Gae => res.status(200).json(Gae))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllGae = (req, res, next) => {
    Gae.find()
        .then(Gaes => res.status(200).json(Gaes))
        .catch(error => res.status(400).json({ error }));
};