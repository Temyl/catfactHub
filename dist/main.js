"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const controller_1 = require("./controller/controller");
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
    allowedHeaders: [
        "Content-Type: application/json",
    ],
}));
app.use(express_1.default.json());
app.use("", controller_1.getMe);
app.listen(8112, () => console.log('server running on server 8112'));
//# sourceMappingURL=main.js.map