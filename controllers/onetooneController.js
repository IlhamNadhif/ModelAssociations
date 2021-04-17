const db = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { email, password, name, address } = req.body;
      const user = await db.User.create({
        email: email,
        password: password,
      });
      const biodata = await db.Biodata.create({
        userId: user.id,
        name: name,
        address: address,
      });
      res.send("succes");
    } catch (error) {
      console.log(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const find = await db.User.findAll({
        include: [{ model: db.Biodata, as: "biodata" }],
      });
      res.send(find);
    } catch (error) {
      console.log(error);
    }
  },
};
