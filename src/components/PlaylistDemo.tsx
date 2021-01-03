import * as React from 'react';

import PlayButton from '../svg/play.svg';

import '../styles/PlaylistDemo.scss'

function PlaylistDemo(props: any) {
    return (
        <div className='playlist-demo'>
            <div className='playlist-demo__image-block'>
                <div className='playlist-demo__image-cover'>
                    <img src={ props.imageUrl } alt="" className='playlist-demo__image'/>
                </div>
                <button className='playlist-demo__play-button'>
                    <PlayButton />
                </button>
            </div>

            <h6 className='playlist-demo__title'>{ props.title }</h6>
            <p className='playlist-demo__decription'>{ props.description }</p>
        </div>
    );
}

export default PlaylistDemo;

