import * as React from "react";

import LogoSVG from "../svg/logo.svg";
import LibSVG from "../svg/lib.svg";
import HomeSVG from "../svg/home.svg";
import SearchSVG from "../svg/search.svg";

import CreatePlaylistSVG from "../svg/createPlaylist.svg";

import "../styles/Navbar.scss";
import { Link, useHistory } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { API_URL } from "../config";
import md5 from "md5";
import { useSelector } from "react-redux";
import { IsLoggedInState } from "../store/types/isLoggedInTypes";

function Navbar() {
    const history = useHistory();
    const isLoggedInState: IsLoggedInState = useSelector(
        (state: IsLoggedInState) => state
    );

    const navbarList = [
        {
            link: "/",
            SVG: LogoSVG,
            className: "navbar__logo",
        },
        {
            link: "/",
            SVG: HomeSVG,
            text: "Главная",
        },
        {
            link: "/search",
            SVG: SearchSVG,
            text: "Поиск",
        },
        {
            link: "/collection",
            SVG: LibSVG,
            text: "Моя медиатека",
        },
    ];

    const navbarPlaylists = [
        {
            link: "/",
            text: "Любимые треки",
        },
        {
            link: "/",
            text: "Плейлист",
        },
        {
            link: "/",
            text: "Плейлист",
        },
    ];

    const createPlaylist = (): any => {
        if (!isLoggedInState.isLoggedIn) {
            alert("Not logged in");
            return null;
        }

        const username = isLoggedInState.username;
        const playlistID = md5(username + new Date().getTime());

        axios
            .post(API_URL + "/playlist", {
                id: playlistID,
                title: "Мой плейлист",
                author: username,
            })
            .then((res: AxiosResponse) => {
                console.log(res);
                history.push("/playlist/" + res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <nav className="navbar">
            <ul className="navbar__list navbar__main-list">
                {navbarList.map((item, index) => {
                    return (
                        <li className={item.className || ""} key={index}>
                            <Link to={item.link}>
                                <item.SVG />
                                <span>{item.text}</span>
                            </Link>
                        </li>
                    );
                })}
            </ul>

            <div className="navbar__playlists">
                <h1>Плейлисты</h1>

                <button className="navbar__create-playlist" onClick={createPlaylist}>
                    <CreatePlaylistSVG />
                    <span>Создать плейлист</span>
                </button>

                <ul className="navbar__list">
                    {navbarPlaylists.map((item, index) => {
                        return (
                            <li key={"navbar-small-playlist-" + index}>
                                <Link to={item.link}>{item.text}</Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
