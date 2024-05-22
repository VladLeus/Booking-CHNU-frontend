import { AppRouter } from './routes';
import { NavBar } from './UI/nav/NavBar.tsx';

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
