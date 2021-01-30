import { exception } from "console";
import express from "express";
import { Password } from "../schemas/PasswordSchema";
import Controller from "./Controller";

class PasswordController extends Controller {
    public path: string = "/password";

    constructor() {
        super();
        this.initRouter();
    }

    initRouter(): void {
        this.router.get(this.path, this.checkPassword);
        this.router.post(this.path, this.createPassword);
    }

    async createPassword(req: express.Request, res: express.Response) {
        try {
            let result = await Password.create({
                username: req.body.username,
                password: req.body.password,
            });
            res.status(200).send(result);
        } catch (err) {
            // if (err.code == 11000) {
            //     console.error("ERROR: Tried to create password.", req.body);
            //     res.status(400).send("Username is used");
            // }
            console.error("ERROR " + err.code + ": Can't create user.", req.body);
            res.status(400).send("Failed");
        }
    }

    checkPassword(req: express.Request, res: express.Response) {}
}

export default PasswordController;
