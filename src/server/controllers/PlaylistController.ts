import express from "express";
import { Playlist } from "../schemas/PlaylistSchema";
import Controller from "./Controller";

class PlaylistController extends Controller {
    public path: string = "/playlist";

    constructor() {
        super();
        this.initRouter();
    }

    initRouter(): void {
        this.router.get(this.path, this.getPlaylists.bind(this));
        this.router.post(this.path, this.createPlaylist);
    }

    getPlaylists(req: express.Request, res: express.Response) {
        if (req.query.id) this.getPlaylistByID(String(req.query.id), res);
    }

    async createPlaylist(req: express.Request, res: express.Response) {
        try {
            let result = await Playlist.create({
                id: req.body.id,
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                imageURL: req.body.imageURL,
            });
            res.status(201).send(result);
        } catch (err) {
            console.error("ERROR " + err.code + ": Can't create playlist.", req.body);
            res.status(400).send("Failed");
        }
    }

    async getPlaylistByID(id: string, res: express.Response) {
        try {
            let result = await Playlist.findOne({
                id: id,
            });
            res.status(200).send(result);
        } catch (err) {
            console.error(err);
            res.status(400).send("Failed");
        }
    }
}

export default PlaylistController;
