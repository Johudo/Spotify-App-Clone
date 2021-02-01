import axios, { AxiosResponse } from "axios";
import React, { useState } from "react";
import { API_URL } from "../config";

function Playlist(props: any) {
    const [playlistInfoState, setPlaylistInfoState] = useState({
        id: undefined,
        title: undefined,
        author: undefined,
        description: undefined,
        imageURL: undefined,
    });

    React.useEffect(() => {
        axios
            .get(API_URL + "/playlist", {
                params: {
                    id: props.match.params.id,
                },
            })
            .then((res: AxiosResponse) => {
                if (res.data.id)
                    setPlaylistInfoState({
                        id: res.data.id,
                        title: res.data.title,
                        author: res.data.author,
                        description: res.data.description,
                        imageURL: res.data.imageURL,
                    });
                else alert("Playlist was not found");
            });
    });

    return (
        <div>
            <p>ID: {playlistInfoState.id}</p>
            <p>Title: {playlistInfoState.title}</p>
            <p>Author: {playlistInfoState.author}</p>
            <p>Description: {playlistInfoState.description}</p>
            <p>Image URL: {playlistInfoState.imageURL}</p>
        </div>
    );
}

export default Playlist;
