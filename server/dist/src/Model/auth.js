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
exports.saveUsertoDB = exports.getUser = void 0;
const db_1 = __importDefault(require("../Database/db"));
const getUser = (email) => __awaiter(void 0, void 0, void 0, function* () {
    //check if email exists
    let text = `SELECT * FROM users
              WHERE email=$1`;
    let values = [email];
    let queryResult = yield db_1.default.query(text, values);
    return queryResult.rows[0];
});
exports.getUser = getUser;
const saveUsertoDB = (email, username, password) => __awaiter(void 0, void 0, void 0, function* () {
    //insert into database
    let text = `INSERT INTO users (username, email, password)
              VALUES($1, $2, $3)
              RETURNING ID`;
    let values = [username, email, password];
    let queryResult = yield db_1.default.query(text, values);
    return queryResult.rows[0];
});
exports.saveUsertoDB = saveUsertoDB;
//# sourceMappingURL=auth.js.map