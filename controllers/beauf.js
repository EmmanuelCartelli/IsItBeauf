const Beauf = require('../models/beauf');

exports.createBeauf = (req, res, next) => {
    const bolArray = [true, false];
    const beauf = new Beauf({
        ...req.body,
        upVotes: 0,
        downVotes: 0,
        isBeauf: bolArray[Math.floor(Math.random() * bolArray.length)],
        originalResult: req.body.isBeauf
    });
    beauf.save()
        .then(() => {
            res.status(201).json({ message: 'Beauf enregistré !', id: beauf._id })
        })
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

exports.vote = (req, res, next) => {
    Beauf.findOne({ id: req.params.id })
        .then(beauf => {
            if (req.body.upVote) {
                beauf.upVotes++;
            } else if (req.body.downVote) {
                beauf.downVotes++;
            }
            if (beauf.upVotes > beauf.downVotes) {
                beauf.isBeauf = true;
            }
            else if (beauf.upVotes < beauf.downVotes) {
                beauf.isBeauf = false;
            }
            else {
                beauf.isBeauf = beauf.originalResult;
            }
            beauf.save()
                .then(() => res.status(200).json({ message: 'Vote enregistré !' }))
                .catch(error => res.status(400).json({ error }));
        })
        .catch(error => res.status(404).json({ error }));
}