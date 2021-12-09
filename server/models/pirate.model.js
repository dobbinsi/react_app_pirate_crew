const mongoose = require("mongoose");

const pirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "You must give this pirate a name! Captain's orders..."],
    },
    image: {
        type: String,
        required:[true, "Don't be shy! Upload a picture."],
    },
    treasures: {
        type: Number,
        required:[true, "How many treasure chests has this pirate found?"],
    },
    phrase: {
        type: String,
        required:[true, "Every pirate has a catch phrase!"]
    },
    position: {
        type: String,
        required:[true, "What is this pirate's job?"],
        enum: [
            "Captain",
            "First Mate",
            "Quarter Master",
            "Boatswain",
            "Powder Monkey",
        ]
    },
    pegLeg: {
        type: Boolean,
        required:[true, "Simple question mate - yes or no?"]
    },
    eyePatch: {
        type: Boolean,
        required:[true, "Simple question mate - yes or no?"]
    },
    hookHand: {
        type: Boolean,
        required:[true, "Simple question mate - yes or no?"]
    },
    createdBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
}, {timestamps: true})

const Pirate = mongoose.model("Pirate", pirateSchema);

module.exports = Pirate;
