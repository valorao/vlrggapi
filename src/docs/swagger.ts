import { Express, Request, Response } from "express";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUI from "swagger-ui-express";
import {version} from "../../package.json";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "vlrggAPI Documentation",
            version: version,
            description: "vlrggAPI is an API that allows you to extract data from vlr.gg"
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT"
                },
            },
        },
        security: [{bearerAuth: []}]
    },
    apis: ["./routes/routes.ts", "./routes/user-schema.ts"]
};

const SwaggerSpec = swaggerJsdoc(options);

function swaggerDocs(app: Express, port: number){
    app.use("/api/docs", swaggerUI.serve, swaggerUI.setup(SwaggerSpec));

    app.get("docs.json", (req: Request, res: Response) => {
        res.setHeader("Content-Type", "application/json");
        res.send(SwaggerSpec);
    });
};

export default swaggerDocs;