import db from "../config/db.js";
import bcrypt from "bcrypt";

const userSchema = new db.Schema({
    nome: {
        type: String,
        required: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minLength: 5,
    },
    tipo: {
        type: String,
        enum: ["ADM", "USU"],
        required: false,
        default: "USU",
    },
    phones: {
        type: Number,
        required: false,
    },
    addres: {
        type: String,
        required:false,
    },
    house_number: {
        type: Number,
        required: false
    },
});

userSchema.pre("save", async function () {

    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.senhaCorreta = async function (senha) {
    return await bcrypt.compare(senha, this.password);
};

const User = db.model("User", userSchema);

export default User;