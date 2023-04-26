import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo/logo';
import { getAuthorizationStatus, getUserData } from '../../store/user-data/selectors';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { AppRoute, AuthorizationStatus } from '../../const';
import { logout } from '../../store/api-actions';

function Header(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const userData = useAppSelector(getUserData);
  const dispatch = useAppDispatch();
  const handleUserLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    dispatch(logout());
  };

  return (
    <header className='header'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
          </div>
          <nav className='header__nav'>

            {
              authorizationStatus === AuthorizationStatus.Auth ? (
                <ul className='header__nav-list'>
                  <li className='header__nav-item user'>
                    <div className='header__nav-profile'>
                      <div className='header__avatar-wrapper user__avatar-wrapper'>
                        <img className="header__avatar-wrapper" src={userData?.avatarUrl} alt={userData?.avatarUrl} />
                      </div>
                      <span className='header__user-name user__name'>{userData?.email}</span>
                    </div>
                  </li>
                  <li className='header__nav-item'>
                    <Link className='header__nav-link' to={AppRoute.Root} onClick={handleUserLogout}>
                      <span className='header__signout'>Sign out</span>
                    </Link>
                  </li>
                </ul>
              ) : (
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Login}>
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__login">Sign in</span>
                    </Link>
                  </li>
                </ul>
              )
            }

          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
