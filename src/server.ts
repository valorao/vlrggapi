import express, { Request, Response } from "express";

import { router } from "../routes/routes";
import { staticroute } from "../static/staticdeliveryroute";
import "./database";
import swaggerDocs from "./docs/swagger";
import { errorpage } from "../static/staticdeliveryroute";

const app = express();
const port = 80;

app.use(express.json());
app.get("/v2/users/auth", (req: Request, res: Response) => res.status(405).sendFile(__dirname + "/index.html"));
app.get("/v2/users/manage", (req: Request, res: Response) => res.status(405).sendFile(__dirname + "/index.html"));
app.use(express.urlencoded({ extended: false }));
app.use("/v2", router);
app.use("/static", staticroute);
// always at the end
app.use("*", errorpage);
app.listen(port, () => {
    (console.log(`API is ready at port ${port}`))
    swaggerDocs(app, port);
});