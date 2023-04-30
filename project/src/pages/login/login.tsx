import { Link } from 'react-router-dom';
import Logo from '../../components/logo/logo';
import { AppRoute, City, PASSWORD_REG_EXP } from '../../const';
import { useAppDispatch} from '../../hooks';
import { getRandomCity } from '../../utils';
import { selectCity } from '../../store/offers-data/offers-data';
import { FormEvent, useRef } from 'react';
import { AuthData } from '../../types/types';
import { logIn } from '../../store/api-actions';
import React from 'react';

function Login(): JSX.Element {
  const dispatch = useAppDispatch();
  const randomCity = getRandomCity(Object.keys(City));
  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const onSubmit = (authData: AuthData) => dispatch(logIn(authData));

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loginRef.current !== null && passwordRef.current !== null) {
      onSubmit({
        login: loginRef.current.value,
        password: passwordRef.current.value,
      });
    }
  };

  const handleInputPasswordChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    let validityMessage = '';
    if (!PASSWORD_REG_EXP.test(target.value)) {
      validityMessage = 'Please enter at least one letter and one digit';
    }
    target.setCustomValidity(validityMessage);
    target.reportValidity();
  };

  return (
    <div className='page page--gray page--login'>
      <header className='header'>
        <div className='container'>
          <div className='header__wrapper'>
            <div className='header__left'>
              <Logo/>
            </div>
          </div>
        </div>
      </header>
      <main className='page__main page__main--login'>
        <div className='page__login-container container'>
          <section className='login'>
            <h1 className='login__title'>Sign in</h1>
            <form className='login__form form' action='#' method='post' onSubmit={handleFormSubmit}>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>E-mail</label>
                <input className='login__input form__input' type='email' name='email' placeholder='Email' required ref={loginRef}/>
              </div>
              <div className='login__input-wrapper form__input-wrapper'>
                <label className='visually-hidden'>Password</label>
                <input className='login__input form__input' type='password' name='password' placeholder='Password' required ref={passwordRef} onChange={handleInputPasswordChange}/>
              </div>
              <button className='login__submit form__submit button' type='submit'>Sign in</button>
            </form>
          </section>
          <section className='locations locations--login locations--current'>
            <div className='locations__item'>
              <Link className='locations__item-link' to={AppRoute.Root} onClick={() => dispatch(selectCity(randomCity))}>
                <span>{randomCity}</span>
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default React.memo(Login);
