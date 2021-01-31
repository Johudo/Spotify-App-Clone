import * as React from "react";

import LogoSVG from "../svg/logo.svg";
import LibSVG from "../svg/lib.svg";
import HomeSVG from "../svg/home.svg";
import SearchSVG from "../svg/search.svg";

import CreatePlaylistSVG from "../svg/createPlaylist.svg";

import "../styles/Navbar.scss";

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

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {navbarList.map((item, index) => {
                    return (
                        <li className={item.className || ""} key={index}>
                            <a href={item.link}>
                                <item.SVG />
                                <span>{item.text}</span>
                            </a>
                        </li>
                    );
                })}
            </ul>

            <div className="navbar__playlists">
                <h1>Плейлисты</h1>

                <ul className="navbar__list">
                    <li>
                        <button>
                            <CreatePlaylistSVG />
                            <span>Создать плейлист</span>
                        </button>
                    </li>
                    <li>
                        <a href="/">Любимые треки</a>
                    </li>
                    <li>
                        <a href="/">Плейлист</a>
                    </li>
                    <li>
                        <a href="/">Плейлист</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
