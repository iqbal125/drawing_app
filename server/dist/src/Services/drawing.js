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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDrawing = exports.postDrawing = exports.getDrawings = void 0;
const drawing_1 = require("../Model/drawing");
const getDrawings = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = yield (0, drawing_1.getDrawingsModel)();
    res.status(200).send(result);
});
exports.getDrawings = getDrawings;
const postDrawing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dataURL = req.body.dataURL;
    const user_id = req.body.user_id;
    const isPrivate = req.body.isPrivate;
    const timeToDraw = req.body.timeToComplete;
    const dateCompleted = req.body.submitedTime;
    const author = req.body.author;
    yield (0, drawing_1.postDrawingModel)(dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted);
    res.status(200).send("Post Successful");
});
exports.postDrawing = postDrawing;
const deleteDrawing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const drawing_id = req.query.drawing_id;
    yield (0, drawing_1.deleteDrawingModel)(drawing_id.toString());
    res.status(200).send("Delete Successful");
});
exports.deleteDrawing = deleteDrawing;
//# sourceMappingURL=drawing.js.map