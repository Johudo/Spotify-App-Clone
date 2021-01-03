import * as React from 'react'

import LogoSVG from '../svg/logo.svg'
import LibSVG from '../svg/lib.svg'
import HomeSVG from '../svg/home.svg'
import SearchSVG from '../svg/search.svg'

import CreatePlaylistSVG from '../svg/createPlaylist.svg'

import '../styles/Navbar.scss'


function Navbar() {
  return (
    <nav className='navbar'>
      <a href="/" className='navbar__logo' >
        <LogoSVG />
      </a>

      <ul className='navbar__list'>
        <li><a href='/'>
          <HomeSVG />
          <span>Главная</span>
        </a></li>
        <li><a href='/search'>
          <SearchSVG />
          <span>Поиск</span>
        </a></li>
        <li><a href='/collection'>
          <LibSVG />
          <span>Моя медиатека</span>
        </a></li>
      </ul>

      <div className='navbar__playlists'>
        <h1>Плейлисты</h1>
  
        <ul className='navbar__list'>
          <li>
            <button>
              <CreatePlaylistSVG />
              <span>Создать плейлист</span>
            </button>
          </li>
          <li><a href='/'>Любимые треки</a></li>
          <li><a href='/'>Плейлист</a></li>
          <li><a href='/'>Плейлист</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;