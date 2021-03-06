import { NavLink } from 'react-router-dom'

export const Navbar = () => (
    <ul className="navbar-nav ml-md-3">
        <li className="nav-item">
            <NavLink className="nav-link" exact to="/">Таблица</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className="nav-link" to="/createcell">Создать</NavLink>
        </li>
    </ul>
)
