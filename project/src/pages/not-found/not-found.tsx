import { Link } from 'react-router-dom';
import './not-found.css';
import Header from '../../components/header/header';

function NotFound(): JSX.Element {
  return (
    <>
      <Header/>
      <section className='not-found'>
        <h1 className='not-found__title'>
          Sorry, no such page exists
        </h1>
        <Link to='/' className='not-found__link'>
          Go to home page
        </Link>
      </section>
    </>
  );
}

export default NotFound;
