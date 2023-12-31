import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import './NavItem.scss';

interface NavItemProps {
    number: string;
    name: string;
    to: string;
}

/**
 * A navigation item
 *
 * @param {NavItemProps} { number, name, to }
 * @return {JSX.Element}
 */
const NavItem: FC<NavItemProps> = ({ number, name, to }) => {
    return (
        <li className="navItem">
            <NavLink to={to} className={({ isActive }) => `navLink ${isActive ? 'active' : ''}`}>
                <b>{number}</b> {name}
            </NavLink>
        </li>
    );
};

export default NavItem;
