const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Enter type of workout"
      },
      name: {
        type: String,
        trim: true,
        required: "Enter a name for workout"
      },
      duration: {
        type: Number,
        required: "Enter duration for workout"
      },
      distance: {
        type: Number
      },
      weight: {
        type: Number 
      },
      reps: {
        type: Number
      },
      sets: {
        type: Number
      }
    }
  ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
