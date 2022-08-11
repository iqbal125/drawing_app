"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const port = process.env.PORT || 5000;
app_1.default.get("/", (req, res) => {
    res.status(200).send();
});
app_1.default.listen(port, () => console.log(`Running on port ${port}`));
//# sourceMappingURL=index.js.map