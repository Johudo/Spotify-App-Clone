import mongoose from "mongoose";
import App from "./App";
import { DB_URL, SERVER_PORT } from "./config";
import Controller from "./controllers/Controller";
import PasswordController from "./controllers/PasswordController";
import PlaylistController from "./controllers/PlaylistController";

const controllers: Controller[] = [new PasswordController(), new PlaylistController()];

const app = new App(controllers, SERVER_PORT, true);
app.listen();

mongoose.connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useCreateIndex", true);
