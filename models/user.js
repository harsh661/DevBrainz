import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, "Email already in use"],
        required: [true, "Please enter a valid email"],
    },
    userName: {
        type: String,
        required: [true, "Please enter a valid name"],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric characters and be unique"]
    },
    image: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema)

export default User