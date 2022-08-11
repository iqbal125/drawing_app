"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const asyncErrorHandler_1 = require("../Middleware/asyncErrorHandler");
const auth_1 = require("../Middleware/auth");
const drawing_1 = require("../Services/drawing");
router.post("/drawing", auth_1.requireAuth, (0, asyncErrorHandler_1.asyncHandler)(drawing_1.postDrawing));
router.get("/drawings", (0, asyncErrorHandler_1.asyncHandler)(drawing_1.getDrawings));
router.delete("/drawing", auth_1.requireAuth, (0, asyncErrorHandler_1.asyncHandler)(drawing_1.deleteDrawing));
exports.default = router;
//# sourceMappingURL=drawing.js.map