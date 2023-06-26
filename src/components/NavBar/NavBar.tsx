import { FC, useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import closeIcon from '../../assets/icon-close.svg';
import openIcon from '../../assets/icon-hamburger.svg';
import './NavBar.scss';

const NavBar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navListRef = useRef<HTMLUListElement>(null);
    const openBtnRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                !navListRef.current?.contains(event.target as Node) &&
                !openBtnRef.current?.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('click', handleClickOutside);

        return () => document.removeEventListener('click', handleClickOutside);
    }, []);

    return (
        <nav className={`navBar${isOpen ? ' open' : ''}`}>
            <button className="button open" onClick={() => setIsOpen(true)} ref={openBtnRef}>
                <img src={openIcon} alt="Open" />
            </button>

            <span className="line"></span>

            <ul className="navList" ref={navListRef}>
                <li className="navItem close">
                    <button className="button close" onClick={() => setIsOpen(false)}>
                        <img src={closeIcon} alt="Close" />
                    </button>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/"
                        className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
                        <b>00</b>Home
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/destination"
                        className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
                        <b>01</b> Destination
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/crew"
                        className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
                        <b>02</b> Crew
                    </NavLink>
                </li>
                <li className="navItem">
                    <NavLink
                        to="/technology"
                        className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
                        <b>03</b> Technology
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
