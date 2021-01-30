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
            console.error("ERROR " + err.code + ": Can't create user.", req.body);
            res.status(400).send("Failed");
        }
    }

    async checkPassword(req: express.Request, res: express.Response) {
        try {
            let result = await Password.findOne({
                username: String(req.query.username) || "",
            });

            if (result === null)
                throw {
                    text: "User was not found",
                    code: 404,
                    knownError: true,
                };

            if (result.password !== req.query.password)
                throw {
                    text: "Incorrect password",
                    code: 401,
                    knownError: true,
                };

            res.status(202).send(result);
        } catch (err) {
            if (err.knownError) {
                res.status(err.code).send(err.text);
            } else {
                console.error("ERROR " + err.code + ": Can't log in.", req.query);
                res.status(400).send("Failed");
            }
        }
    }
}

export default PasswordController;
