import { FC } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/imgs/logo.svg';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <Link to="/">
                <img src={logo} alt="Logo" className="logo" />
            </Link>

            <NavBar />
        </header>
    );
};

export default Header;
