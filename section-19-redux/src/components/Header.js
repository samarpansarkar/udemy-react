import { useDispatch, useSelector } from 'react-redux';

import classes from './Header.module.css';
import { authActions } from '../store/auth';

const Header = () => {
  const dispatch = useDispatch()

  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const showButton = useSelector(state => state.auth.showButton);

  const logOutHandler = (event) => {
    event.preventDefault();
    dispatch(authActions.logout())
    console.log('logged out.........');
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            {showButton && <button onClick={logOutHandler}>Logout</button>}
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
