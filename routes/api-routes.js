const path = require("path");
const Workout = require("../models/Workout");

module.exports = (app) => {
  app.get("/api/workouts", (req, res) => {
    Workout.find({})
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => res.status(400).json(err));
  });

  app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => res.status(400).json(err));
  });

  app.post("/api/workouts", (req, res) => {
    Workout.create(req.body)
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => res.status(400).json(err));
  });

  app.put("/api/workouts/:id", (req, res) => {
    Workout.findOneAndUpdate(
      { id: req.params.id },
      { $push: { exercises: req.body } }
    )
      .then((dbExercise) => {
        res.json(dbExercise);
      })
      .catch((err) => res.status(400).json(err));
  });
};
