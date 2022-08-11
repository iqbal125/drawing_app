"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const asyncErrorHandler_1 = require("../Middleware/asyncErrorHandler");
const auth_1 = require("../Services/auth");
//sign in or sign up user then send jwt token
router.post("/signup", (0, asyncErrorHandler_1.asyncHandler)(auth_1.SignUp));
router.post("/login", (0, asyncErrorHandler_1.asyncHandler)(auth_1.Login));
exports.default = router;
//# sourceMappingURL=auth.js.map