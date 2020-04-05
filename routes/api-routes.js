const path = require("path");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    res.json(200);
  });
};
