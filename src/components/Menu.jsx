import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <ul>
                <li><NavLink className={({isActive})=> isActive?"active-item":"pending-item"} to="/">Home</NavLink></li>
                <li><NavLink className={({isActive})=>  isActive?"active-item":"pending-item"} to="/form-input">form input</NavLink></li>
                <li><NavLink  className={({isActive})=> isActive?"active-item":"pending-item"} to="/todo">todo</NavLink></li>

            </ul>
        </div>
    );
};

export default Menu;