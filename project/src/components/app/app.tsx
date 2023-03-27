import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Room from '../../pages/room/room';
import NotFound from '../../pages/not-found/not-found';
import {Offer, Review} from '../../types/types';

type AppProps = {
  offersCount: number;
  offers: Offer[];
  reviews: Review[];
}

function App({offersCount, offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Root}
          element={<Main offersCount = {offersCount} offers = {offers} />}
        />
        <Route
          path={AppRoute.Login}
          element={<Login />}
        />
        <Route
          path={`${AppRoute.Room}/:id`}
          element={<Room reviews = {reviews}/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
