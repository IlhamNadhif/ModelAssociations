const db = require("../models");

module.exports = {
  create: async (req, res) => {
    try {
      const { userId, job } = req.body;
      const savejob = await db.Job.create({
        userId: userId,
        job: job,
      });
      res.send(savejob);
    } catch (error) {
      console.log(error);
    }
  },
  findAll: async (req, res) => {
    try {
      const find = await db.User.findAll({
        include: [{ model: db.Job, as: "jobs" }],
      });
      res.send(find);
    } catch (error) {
      console.log(error);
    }
  },
};
