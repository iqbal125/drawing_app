"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, req, res, next) => {
    console.log(err);
    res.status(500).send({ err });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map