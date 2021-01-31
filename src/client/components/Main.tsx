import React from "react";
import PlaylistDemo from "./PlaylistDemo";

import "../styles/Main.scss";

function Main() {
    const playlist = [
        {
            title: "На повторе",
            description: "Эти треки не отпускают тебя прямо сейчас.",
            imageUrl:
                "https://daily-mix.scdn.co/covers/on_repeat/PZN_On_Repeat_DEFAULT-ru.jpg",
        },
        {
            title: "Микс дня 3",
            description: "LANNÉ, LUM!X, Rasster и не только",
            imageUrl:
                "https://dailymix-images.scdn.co/v2/img/63da3498e575ee8ac4baded26086e78fa2d88351/2/ru/default",
        },
        {
            title: "Радио: NILETTO",
            description: "Автор Spotify",
            imageUrl:
                "https://seeded-session-images.scdn.co/v1/img/artist/7wHvox8DtmBBPpDFRVURv4/ru",
        },
    ];

    return (
        <section className="main">
            <div className="main-section">
                <h2 className="main-section__title">Ты часто слушаешь</h2>
                <div className="main-section__playlists-list">
                    {playlist.map((data, index) => {
                        return (
                            <PlaylistDemo
                                key={index}
                                title={data.title}
                                description={data.description}
                                imageUrl={data.imageUrl}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default Main;
