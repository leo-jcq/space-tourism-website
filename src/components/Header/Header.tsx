import { FC } from 'react';
import logo from '../../assets/imgs/logo.svg';
import NavBar from '../NavBar/NavBar';
import './Header.scss';

const Header: FC = () => {
    return (
        <header className="header">
            <img src={logo} alt="Logo" className="logo" />
            <NavBar />
        </header>
    );
};

export default Header;
