import { FC, useEffect, useRef, useState } from 'react';
import closeIcon from '../../assets/imgs/icon-close.svg';
import openIcon from '../../assets/imgs/icon-hamburger.svg';
import NavItem from '../NavItem/NavItem';
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
                <NavItem number="00" name="Home" to="/" />
                <NavItem number="01" name="Destination" to="/destination" />
                <NavItem number="02" name="Crew" to="/crew" />
                <NavItem number="03" name="Technology" to="/technology" />
            </ul>
        </nav>
    );
};

export default NavBar;
