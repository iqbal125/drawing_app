"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Login = exports.SignUp = void 0;
const auth_1 = require("../Middleware/auth");
const auth_2 = require("../Model/auth");
const bcrypt_1 = __importDefault(require("bcrypt"));
const hashPassword = (plainTextPass) => __awaiter(void 0, void 0, void 0, function* () {
    const hash = yield bcrypt_1.default.hash(plainTextPass, 10);
    return hash;
});
function comparePassword(plaintextPassword, hash) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield bcrypt_1.default.compare(plaintextPassword, hash);
        return result;
    });
}
const SignUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    //First Check if User exists
    const userExists = yield (0, auth_2.getUser)(email);
    //If user exists send error message, otherwise continue code
    if (userExists) {
        res.status(400).send({ type: "Failed Sign Up", message: "User Already Exists" });
        return;
    }
    let hashedPass = yield hashPassword(password);
    //save user info to our own db, and get unique user database id
    let result = yield (0, auth_2.saveUsertoDB)(email, username, hashedPass);
    console.log(result);
    let user_id = result.id;
    res.send({ token: (0, auth_1.setToken)(user_id) });
});
exports.SignUp = SignUp;
const Login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let email = req.body.email;
    const password = req.body.password;
    //Check if User exists
    let user = yield (0, auth_2.getUser)(email);
    //If user not found send error message
    if (!user) {
        res.status(400).send({ type: "Failed Login", message: "User or Password incorrect" });
        return;
    }
    let isPasswordValid = yield comparePassword(password, user.password);
    if (!isPasswordValid) {
        res.status(400).send({ type: "Failed Login", message: "User or Password incorrect" });
        return;
    }
    let user_id = user.id;
    let username = user.username;
    res.send({ token: (0, auth_1.setToken)({ user_id, username }) });
});
exports.Login = Login;
//# sourceMappingURL=auth.js.map