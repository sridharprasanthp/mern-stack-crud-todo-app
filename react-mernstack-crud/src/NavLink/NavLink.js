import { NavLink } from 'react-router-dom';
import './NavLink.css'
import Logo from '../logo.svg'
function NavLinks() {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <img src={Logo} alt='Logo' />
                    </li>
                    <li>
                        <h1 id='h1'>MERN Stack ToDo App</h1>
                    </li>
                    <li>
                        <NavLink to='/' activeclassname='active'></NavLink>
                    </li>
                    <li>
                        <NavLink to='/todolist' activeclassname='active'>ToDo List</NavLink>
                    </li>
                    <li>
                        <NavLink to='/create' activeclassname='active'>Create ToDo</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavLinks;