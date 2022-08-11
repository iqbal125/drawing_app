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
exports.deleteDrawingModel = exports.getDrawingsModel = exports.postDrawingModel = void 0;
const db_1 = __importDefault(require("../Database/db"));
const postDrawingModel = (dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted) => __awaiter(void 0, void 0, void 0, function* () {
    let text = `INSERT INTO drawings(dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted)
              VALUES ($1, $2, $3, $4, $5, $6)`;
    let values = [dataURL, user_id, author, isPrivate, timeToDraw, dateCompleted];
    yield db_1.default.query(text, values);
    return;
});
exports.postDrawingModel = postDrawingModel;
const getDrawingsModel = () => __awaiter(void 0, void 0, void 0, function* () {
    let text = `SELECT * FROM drawings`;
    let queryResult = yield db_1.default.query(text);
    return queryResult.rows;
});
exports.getDrawingsModel = getDrawingsModel;
const deleteDrawingModel = (drawing_id) => __awaiter(void 0, void 0, void 0, function* () {
    let text = `DELETE FROM drawings
              WHERE id=$1`;
    let values = [drawing_id];
    yield db_1.default.query(text, values);
    return;
});
exports.deleteDrawingModel = deleteDrawingModel;
//# sourceMappingURL=drawing.js.map