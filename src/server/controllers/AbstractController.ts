import express from "express";

abstract class AbstractController {
    public path!: string;
    router: express.Router = express.Router();

    public getRouter(): express.Router {
        return this.router;
    }

    abstract initRouter(): void;
}

export default AbstractController;
