
import headerStyle from './Header.module.scss';
import logo from '../../img/logo.png'; 

const Header = () => {
    return(
        <header className={headerStyle.header}>
            <div className={headerStyle.container}>
            <img src={logo} alt="" />
            <h1 className="">Lesson Reminder</h1>
            </div>
        </header>
    )
}

export default Header;