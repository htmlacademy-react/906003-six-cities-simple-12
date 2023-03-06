import Main from '../../pages/main/Main';

type AppProps = {
  offersCount: number;
}

function App({offersCount}: AppProps): JSX.Element {
  return <Main offersCount={offersCount}/>;
}

export default App;
