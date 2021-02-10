import cors from "cors";
import express from "express";
import AbstractController from "./controllers/AbstractController";

class App {
    app: express.Application = express();
    port: number;

    constructor(controllers: AbstractController[], port?: number, cors?: boolean) {
        this.port = port || 8000;
        cors ? this.useCORS() : null;

        this.app.use(express.json());
        this.useRouters(controllers);
    }

    useCORS(): void {
        this.app.use(cors());
    }

    useRouters(controllers: AbstractController[]): void {
        controllers.forEach((controller) => {
            this.app.use(controller.getRouter());
        });
    }

    listen(): void {
        this.app.listen(this.port, () => {
            console.log(`[SERVER]: Server is running at https://localhost:${this.port}`);
        });
    }
}

export default App;
