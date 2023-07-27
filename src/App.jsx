import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';


function App() {

  const [idMusic, setIdMusic] = useState(0);
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [musicState, setMusicState] = useState(false);

  
  return (    
      <div className="container">
        <div className='container-header'>
          <Header />
        </div>
          <hr className='container-line color6A6363'></hr>
        <div className='container-main'>
          <Main setIdMusic={setIdMusic} setMusicState={setMusicState} setTitle={setTitle} setArtist={setArtist} />
        </div>
        <div className='container-footer'>
          <Footer idMusic={idMusic} setIdMusic={setIdMusic} musicState={musicState} setMusicState={setMusicState} title={title} setTitle={setTitle} artist={artist} setArtist={setArtist}/>
        </div>
      </div>
    );
}

export default App;
