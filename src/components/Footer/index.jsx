import './styles.css'
import play from '../../assets/play.svg'
import pause from '../../assets/pause.svg'
import stop from '../../assets/stop.svg'
import next from '../../assets/next.svg'
import previous from '../../assets/previous.svg'
import musics from '../../musics'
import { useRef, useState } from 'react'
import { useEffect } from 'react'

export default function Footer ({idMusic, setIdMusic, musicState, setMusicState, title, setTitle, artist, setArtist}) {

    let audioRef = useRef('');

    const handleAutoPlay = (idMusic) => {
        const music = musics.find((music) => music.id === idMusic);
        return music ? music.url : ''

    }

    const handlePlayAndPause = () => {    
        if (!musicState) {
            audioRef.current.play()
            setMusicState(!musicState);
            return;
        }

        audioRef.current.pause()
        setMusicState(!musicState)
    }

    const handleNextSong = (idMusic) => {
        return idMusic >= musics.length ? setIdMusic(1) : setIdMusic(idMusic + 1);
    }

    const handlePreviousSong = (idMusic) => {
       return idMusic > 1 ? setIdMusic(idMusic - 1) : setIdMusic(musics.length)
    }

    useEffect(() => {
        const music = musics.find((music) => music.id === idMusic);
            if(music) {
                setTitle(music.title);
                setArtist(music.artist)   
            }
    
    }, [idMusic])

    console.log(audioRef);

    return (
        <div className='footer-container'>
            
            <div className='footer-menu-names'>
                <h1 className='roboto700 fsize-24 colorFFFFFF'>{title}</h1>
                <h2 className='roboto700 fsize-16 colorFFFFFF'>{artist}</h2>
            </div>
                <div>                 
                    <div className='footer-menu-container'>
                        <audio ref={audioRef} src={handleAutoPlay(idMusic)} autoPlay={musicState}> </audio>
                            <button onClick={() => setIdMusic('')} className='btn-music-player'><img src={stop} alt="Parar música"/></button>
                            <button onClick={() => handlePreviousSong(idMusic)} className='btn-music-player'><img src={previous} alt="Música anterior"/></button>
                            <button onClick={() => handlePlayAndPause()} className='btn-music-player'><img src={musicState ? pause : play} alt="Pausar ou dar Play em uma música"/></button>
                            <button onClick={() => handleNextSong(idMusic)} className='btn-music-player'><img src={next} alt="Próxima música" /></button>                            
                    </div>
                </div>
            
        </div>
    )
}