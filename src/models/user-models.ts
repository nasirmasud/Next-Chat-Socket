import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    clerkUserId: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
    },
    profilePicture: {
      type: String,
      require: false,
    },
    bio: {
      type: String,
      require: false,
    },
  },
  { timestamps: true }
);

//check if the modal is already compiled, if yes delete it
if (mongoose.models && mongoose.models["users"]) {
  mongoose.deleteModel("users");
}
const UserModal = mongoose.model("users", userSchema);
export default UserModal;
