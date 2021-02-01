import * as React from "react";

import LogoSVG from "../svg/logo.svg";
import LibSVG from "../svg/lib.svg";
import HomeSVG from "../svg/home.svg";
import SearchSVG from "../svg/search.svg";

import CreatePlaylistSVG from "../svg/createPlaylist.svg";

import "../styles/Navbar.scss";
import { Link } from "react-router-dom";

function Navbar() {
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

    const navbarBigPlaylists = [
        {
            link: "/create-playlist",
            SVG: CreatePlaylistSVG,
            text: "Создать плейлист",
        },
    ];

    const navbarSmallPlaylists = [
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

                <ul className="navbar__list navbar__playlists-list__big">
                    {navbarBigPlaylists.map((item, index) => {
                        return (
                            <li key={"navbar-big-playlist-" + index}>
                                <Link to={item.link}>
                                    <item.SVG />
                                    <span>{item.text}</span>
                                </Link>
                            </li>
                        );
                    })}
                </ul>

                <ul className="navbar__list">
                    {navbarSmallPlaylists.map((item, index) => {
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
