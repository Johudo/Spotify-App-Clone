import * as React from 'react'

import SpotifyLogo from '../svg/test.svg'

import '../styles/Navbar.css'


function Navbar() {
  return (
    <nav className='navbar'>
      
      {/* <SpotifyLogo className='navbar__logo' />  */}
      <SpotifyLogo /> 

      <ul className='navbar__nav-list'>
        <li><a href='/'>Главная</a></li>
        <li><a href='/search'>Поиск</a></li>
        <li><a href='/collection'>Моя медиатека</a></li>
      </ul>

      <div>
        <h4>Плейлисты</h4>
        <button>Создать плейлист</button>
        <ul className='navbar__nav-list'>
          <li><a href='/'>Любимые треки</a></li>
          <li><a href='/'>Плейлист</a></li>
          <li><a href='/'>Плейлист</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default Navbar;