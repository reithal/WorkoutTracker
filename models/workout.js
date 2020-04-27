const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now
  },
  exercises: {
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
  distance: {
    type: Number
  },
  weight: {
    type: Number 
  },
  sets: {
    type: Number
  },
  reps: {
    type: Number
  },
  duration: {
    type: Number,
    required: "Enter duration for workout"
  }
}
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
