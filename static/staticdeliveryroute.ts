import express, { Request, Response } from "express";
const staticroute = express.Router();
const errorpage = express.Router();
import { v4 as uuid } from "uuid";


errorpage.get("/", (req: Request, res: Response) => {
    res.status(404).sendFile(__dirname + "/error" + "/index.html");
});
staticroute.get("/style.css", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/error" + "/style.css");
});
staticroute.get("/back.png", (req: Request, res: Response) => {
    res.header("x-action-uuid", uuid())
    res.sendFile(__dirname + "/error" + "/back.png");
});
staticroute.get("/index.js", (req: Request, res: Response) => {
        res.sendFile(__dirname + "/error" + "/index.js")
})
errorpage.post("/", (req: Request, res: Response) => {
    res.status(404).sendFile(__dirname + "/error" + "/index.html");
});
staticroute.post("/style.css", (req: Request, res: Response) => {
    res.sendFile(__dirname + "/error" + "/style.css");
});
staticroute.post("/back.png", (req: Request, res: Response) => {
    res.header("x-action-uuid", uuid())
    res.sendFile(__dirname + "/error" + "/back.png");
});
staticroute.post("/index.js", (req: Request, res: Response) => {
        res.sendFile(__dirname + "/error" + "/index.js")
})

export { staticroute }
export { errorpage }