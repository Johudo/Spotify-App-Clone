import mongoose from "mongoose";

interface IPlaylist extends mongoose.Document {
    id: string;
    title: string;
    author: string;
    description: string;
    imageURL: string;
}

const PlaylistSchema: mongoose.Schema = new mongoose.Schema(
    {
        id: { type: String, required: true, unique: true },
        title: { type: String, required: true },
        author: { type: String, required: true },
        description: { type: String },
        imageURL: { type: String },
    },
    { id: false }
);

const Playlist: mongoose.Model<IPlaylist> = mongoose.model("Playlist", PlaylistSchema);

export { IPlaylist, Playlist };
