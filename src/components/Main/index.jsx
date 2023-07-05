import './styles.css'
import musics from '../../musics'


export default function Main () {

    return (
        <div className='main-container'>
            <div className='main-title'>
                <h1 className='colorFFFFFF roboto700 fsize-24'>The best play list</h1>
            </div>
            <hr className='main-line color6A6363'></hr>
            <div className='main-playlist'>
                {musics.map((music) => (
                    <div className="main-playlist-music" key={music.id}>
                        <img className="main-music-image " src={music.cover} alt="" />
                        <h2 className='colorFFFFFF roboto700 fsize-24'>{music.title}</h2>
                        <p className='main-music-description colorCCC3C3 rubik400 fsize-16'>{music.description}</p>
                    </div>
                ))}
                
            </div>
        </div>
    )
}