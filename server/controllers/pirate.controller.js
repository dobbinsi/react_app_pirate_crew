const Pirate = require("../models/pirate.model");

module.exports = {
    findAllPirates: (req, res) => {
        Pirate.find({})
            .then((allPirates) => {
                console.log(allPirates);
                res.json(allPirates)
            })
            .catch((err) => {
                console.log("findAllPirates failed...");
                res.json({ message: "Something went wrong in findAllPirates", error: err });
            })
    },

    findOnePirate: (req, res) => {
        Pirate.findOne({ _id: req.params.id })
            .then((onePirate) => {
                console.log(onePirate);
                res.json(onePirate)
            })
            .catch((err) => {
                console.log("findOnePirate failed...");
                res.json({ message: "Something went wrong in findOnePirate", error: err });
            })
    },

    createNewPirate: (req, res) => {
        Pirate.create(req.body)
            .then((newPirate) => {
                console.log(newPirate);
                res.json(newPirate)
            })
            .catch((err) => {
                console.log("createNewPirate failed...");
                res.status(400).json(err);
            })
    },
    
    updatePirate: (req, res) => {
        Pirate.findOneAndUpdate(
            { _id: req.params.id },
            req.body,
            { new: true, runValidators: true }
        )
            .then((updatedPirate) => {
                console.log(updatedPirate);
                res.json(updatedPirate);
            })
            .catch((err) => {
                console.log("updatePirate failed...");
                res.status(400).json(err);
            })
    },
    
    deletePirate: (req, res) => {
        Pirate.deleteOne({ _id: req.params.id })
            .then((deletedPirate) => {
                console.log(deletedPirate);
                res.json(deletedPirate)
            })
            .catch((err) => {
                console.log("deletePirate failed...");
                res.json({ message: "Something went wrong in deletePirate", error: err });
            })
    },
}

