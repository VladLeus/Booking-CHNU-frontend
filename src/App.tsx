import { AppRouter } from './routes';
import { NavBar } from '@ui/nav/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <div className="pt-[120px]">
        <AppRouter />
      </div>
    </>
  );
}

export default App;
