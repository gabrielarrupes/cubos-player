import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="container">
      <div className='container-header'>
        <Header />
      </div>
      <hr className='container-line color6A6363'></hr>
      <div className='container-main'>
        <Main />
      </div>
      <div className='container-footer'>
        <Footer />
      </div>
    </div>
  );
}

export default App;
