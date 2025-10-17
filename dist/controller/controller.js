"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMe = void 0;
const express_1 = require("express");
const service_1 = require("../service/service");
const route = (0, express_1.Router)();
const catService = new service_1.CatFactService;
exports.getMe = route.get("/me", async (req, res) => {
    try {
        const catfact = await catService.get();
        let User;
        User = {
            email: "temmydun02@gmail.com",
            name: "Oteyola Oluwadunsin",
            stack: "Node.js/Express, typescript"
        };
        let response;
        response = {
            status: "success",
            user: User,
            timestamp: new Date().toISOString(),
            fact: catfact
        };
        return res.status(200).json(response);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'error: something went wrong'
        });
    }
});
//# sourceMappingURL=controller.js.map