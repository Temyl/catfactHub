import express from "express";
import cors from "cors";
import { getMe } from "./controller/controller";

const app = express();

app.use(cors({
    origin: "*",
    allowedHeaders: [
        "Content-Type: application/json",
    ],
}
));

app.use(express.json());

app.use("", getMe);

app.listen(8112, () => 
    console.log('server running on server 8112')
);