"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatFactService = void 0;
const axios_1 = __importDefault(require("axios"));
const interface_1 = require("../interface/interface");
class CatFactService {
    constructor() {
        this.cat = axios_1.default.create({
            baseURL: "https://catfact.ninja",
            timeout: 5 * interface_1.DURATION.SECONDS,
        });
    }
    async get() {
        try {
            const response = await this.cat.get("/fact");
            return response.data.fact;
        }
        catch (err) {
            console.error("Failed to fetch cat fact:", err);
            throw new Error("Error fetching cat fact");
        }
    }
}
exports.CatFactService = CatFactService;
//# sourceMappingURL=service.js.map