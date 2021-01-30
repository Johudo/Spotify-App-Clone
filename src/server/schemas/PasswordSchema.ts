import * as mongoose from "mongoose";

interface IPassword extends mongoose.Document {
    username: string;
    password: string;
}

const PasswordSchema: mongoose.Schema = new mongoose.Schema(
    {
        username: { type: String, required: true, unique: true },
        password: { type: String, required: true },
    },
    { id: false }
);

const Password: mongoose.Model<IPassword> = mongoose.model("Password", PasswordSchema);

export { IPassword, Password };
