const express = require("express");
const authMiddleware = require("../middlewares/auth");

const Enterprise = require("../models/enterprises");
const Console = require("../models/consoles");

const router = express.Router();

router.use(authMiddleware);

router.get("/", async (req, res) => {
  try {
    const enterprise = await Enterprise.find().populate(["user", "consoles"]);
    console.log("TESTE 1")
    return res.send({ enterprise });
  } catch (err) {
    return res.status(400).send({ error: "Error Loading Enterprise" });
  }
});

router.get("/:enterpriseId", async (req, res) => {
  try {
    const enterprise = await Enterprise.findById(req.params.enterpriseId).populate([
      "user",
      "consoles",
    ]);
    
    return res.send({ enterprise });
  } catch (err) {
    return res.status(400).send({ error: "Error Loading enterprise" });
  }
});

router.post("/", async (req, res) => {
    try {
      const { title, description, consoles } = req.body;
  
      const enterprise = await Enterprise.create({
        title,
        description,
        user: req.userId,
      });
  
      await Promise.all(
        consoles.map(async (console) => {
          const enterpriseConsole = new Console({ ...console, enterprise: enterprise._id });
  
          await enterpriseConsole.save();
  
          enterprise.consoles.push(enterpriseConsole);
        })
      );
  
      await enterprise.save();
  
      return res.send({ enterprise });
    } catch (err) {
      return res.status(400).send({ error: "Error creating new enterprise" });
    }
  });

  module.exports = (app) => app.use("/enterprises", router);