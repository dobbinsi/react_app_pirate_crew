const PirateController = require("../controllers/pirate.controller");

const { authenticate } = require("../config/jwt.config");

module.exports = (app) =>{
    app.get("/api/pirates", PirateController.findAllPirates);
    app.post("/api/pirates", authenticate, PirateController.createNewPirate);
    app.get("/api/pirates/:id", PirateController.findOnePirate);
    app.get("/api/pirates/:id", PirateController.findOnePirate);
    app.get("/api/user/pirates/:userId", PirateController.findAllPiratesByUser);
    app.delete("/api/pirates/:id", PirateController.deletePirate);
}
