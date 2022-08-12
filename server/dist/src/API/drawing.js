"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const asyncErrorHandler_1 = require("../Middleware/asyncErrorHandler");
const drawing_1 = require("../Services/drawing");
router.get("/drawings", (0, asyncErrorHandler_1.asyncHandler)(drawing_1.getDrawings));
//router.post("/drawing", requireAuth, asyncHandler(postDrawing))
//router.delete("/drawing", requireAuth, asyncHandler(deleteDrawing))
router.post("/drawing", (0, asyncErrorHandler_1.asyncHandler)(drawing_1.postDrawing));
router.delete("/drawing", (0, asyncErrorHandler_1.asyncHandler)(drawing_1.deleteDrawing));
exports.default = router;
//# sourceMappingURL=drawing.js.map