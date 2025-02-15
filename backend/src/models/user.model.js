import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["patient","therapist"],
      required: true,
    },
    completedTasks: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Task",
    }],
    lastTaskRefresh:{
      type: Date,
      default: new Date(0),
    }
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
