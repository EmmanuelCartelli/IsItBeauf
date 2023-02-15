const Beauf = require('../models/beauf');

exports.createBeauf = (req, res, next) => {
    delete req.body._id;
    const beauf = new Beauf({
        ...req.body
    });
    beauf.save()
        .then(() => res.status(201).json({ message: 'Beauf enregistré !' }))
        .catch(error => res.status(400).json({ error }));
};

exports.getOneBeauf = (req, res, next) => {
    Beauf.findOne({ id: req.params.id })
        .then(beauf => res.status(200).json(beauf))
        .catch(error => res.status(404).json({ error }));
};

exports.getAllBeauf = (req, res, next) => {
    Beauf.find()
        .then(beaufs => res.status(200).json(beaufs))
        .catch(error => res.status(400).json({ error }));
};