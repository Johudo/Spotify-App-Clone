import express from "express";

class Controller {
    public path!: string;
    router: express.Router = express.Router();

    public getRouter(): express.Router {
        return this.router;
    }

    initRouter(): void {
        throw Error("Method Controller.initRouter() must be overload!");
    }
}

export default Controller;
