"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setToken = exports.requireAuth = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const requireAuth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    // token validation
    try {
        const token = authHeader.split(" ")[1];
        jsonwebtoken_1.default.verify(token, process.env.AUTH_SECRET);
        next();
    }
    catch (err) {
        res.status(403).send(err);
        return;
    }
};
exports.requireAuth = requireAuth;
const setToken = (user) => {
    let opts = {
        expiresIn: "7d",
    };
    let secret = process.env.AUTH_SECRET;
    return jsonwebtoken_1.default.sign({ user }, secret, opts);
};
exports.setToken = setToken;
//# sourceMappingURL=auth.js.map