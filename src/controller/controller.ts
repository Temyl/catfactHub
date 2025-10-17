import { Request, Response, Router } from "express";
import { CatFactService } from "../service/service";
import { Apiresponse, UserInfo } from "../interface/interface";

const route = Router();
const catService = new CatFactService;

export const getMe = route.get(
    "/me",
   async (
    req: Request,
    res: Response
   ) => {

    try {
        const catfact = await catService.get();

        let User: UserInfo;

        User = {
            email: "temmydun02@gmail.com",
            name: "Oteyola Oluwadunsin",
            stack: "Node.js/Express, typescript"
        }

        let response: Apiresponse;
        
        response = {
            status: "success",
            user: User,
            timestamp: new Date().toISOString(),
            fact: catfact
        }

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'error: something went wrong'
        });
    }
   }
)