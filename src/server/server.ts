import mongoose from "mongoose";
import App from "./App";
import { DB_URL, SERVER_PORT } from "./config";
import AbstractController from "./controllers/AbstractController";
import PasswordController from "./controllers/PasswordController";
import PlaylistController from "./controllers/PlaylistController";

const controllers: AbstractController[] = [new PasswordController(), new PlaylistController()];

const app = new App(controllers, SERVER_PORT, true);
app.listen();

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
