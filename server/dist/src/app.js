"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// initialize 3rd party libraries
require("./Config/dotenv");
require("./Database/db");
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const rateLimiter_1 = __importDefault(require("./Middleware/rateLimiter"));
const errorHandler_1 = require("./Middleware/errorHandler");
const unhandledRejectionHandler_1 = require("./Middleware/unhandledRejectionHandler");
const auth_1 = __importDefault(require("./API/auth"));
const drawing_1 = __importDefault(require("./API/drawing"));
const app = (0, express_1.default)();
// Middleware
app.use((0, cors_1.default)());
app.use(rateLimiter_1.default);
app.use((0, morgan_1.default)("dev"));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use("/auth", auth_1.default);
app.use("/api", drawing_1.default);
// error handling
app.use(errorHandler_1.errorHandler);
process.on("unhandledRejection", unhandledRejectionHandler_1.unhandledRejectionHandler);
exports.default = app;
//# sourceMappingURL=app.js.map