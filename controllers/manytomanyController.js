const db = require("../models");

module.exports = {
  createPaket: async (req, res) => {
    try {
      const { paket } = req.body;
      const savePaket = await db.Paket.create({
        paket: paket,
      });
      res.send("succes");
    } catch (error) {
      console.log(error);
    }
  },
  findAllPaket: async (req, res) => {
    try {
      const find = await db.Paket.findAll();
      res.send(find);
    } catch (error) {
      console.log(error);
    }
  },
  createUserPaket: async (req, res) => {
    try {
      const { userId, paketId } = req.body;
      await db.User_Paket.create({
        userId: userId,
        paketId: paketId,
      });
      res.send("succes");
    } catch (error) {
      console.log(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const find = await db.User.findAll({
        include: [{ model: db.Paket, as: "pakets" }],
      });
      res.send(find);
    } catch (error) {
      console.log(error);
    }
  },
};
