import express from "express";

import { SERVER_PORT } from "./config";

const app: express.Express = express();
const PORT: number = SERVER_PORT;

app.get("/", (req: express.Request, res: express.Response) =>
    res.send("Express + TypeScript Server")
);

app.listen(PORT, () => {
    console.log(`[SERVER]: Server is running at https://localhost:${PORT}`);
});
