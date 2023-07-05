import './styles.css'
import logo from '../../assets/logo.svg'
import profile from '../../assets/profile.jpg'


export default function Header () {

    return (
        <div className='header-container'>
            <div className='header-logo'>
                <img src={logo} alt="Logo do site" />
            </div>
            <div className='header-profile'>
                <img className='header-profile-image' src={profile} alt="" />
                <h2 className="roboto700 fsize-16 colorFFFFFF">Bem vindo, Gabriela!</h2>
            </div>
        </div>
    )
}