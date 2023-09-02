const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { UserModel } = require("../model/userModel")
require("dotenv").config()
const fs = require("fs");



const signUp = async (req, res) => {
    const { name, email, password, role } = req.body

    try {

        const existingUser = await UserModel.findOne({ email })
        //console.log(existingUser)
        if (existingUser) {
            return res.status(200).send({ msg: "user already exists" })
        }
        bcrypt.hash(password, 6, async function (err, hash) {
            if (err) {
                return res.status(400).send({ msg: "something went wrong try again" })
            }
            const user = new UserModel({ name, email, password: hash, role })
            await user.save()
            return res.status(201).send({ msg: "signUp successfull" })

        })


    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: "something went wrong try again" })
    }
}



const logIn = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await UserModel.findOne({ email })
        //console.log(user)

        if (!user) {
            return res.status(401).send({ msg: 'user not found' })
        }
        const isMatch = await bcrypt.compare(password, user.password)
        //console.log(isMatch)
        if (!isMatch) {
            return res.status(200).send({ msg: "invalid credentials" })
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, process.env.secret, { expiresIn: "1d" })
        res.status(200).send({ msg: "login successfull", token: token })

    }
    catch (err) {
        //console.log(err)
        res.status(500).send({ msg: "something went wrong try again" })
    }
}


const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        await UserModel.findByIdAndDelete({ _id: userId });
        res.status(204).send({ "msg": "user has been deleted" })
    } catch (error) {
        console.log("error", error);
        res.status(500).send(error);
    }
}

const logout = async (req, res) => {
    let token = req.headers.authorization;
    try {
        let blacklistAcc = JSON.parse(fs.readFileSync("./blacklist.json", "utf-8"));
        blacklistAcc.push(token);
        fs.writeFileSync("./blacklist.json", JSON.stringify(blacklistAcc));
        res.send({ msg: "logout successfull" });
    } catch (error) {
        res.send({ msg: "something went wrong" });
    }
}


module.exports = { signUp, logIn, deleteUser, logout }