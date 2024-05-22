import { Link } from 'react-router-dom';
import { ProfileMenu } from './components/ProfileMenu.tsx';

export function NavBar() {
  return (
    <div className="w-screen h-[110px] flex flex-col items-center bg-blue-500 fixed top-0">
      <div className="flex w-[90%] m-2 justify-between">
        <h1 className="text-4xl text-amber-50 font-bold">Booking</h1>
        <ProfileMenu />
      </div>

      <nav className="flex flex-row w-[90%] mt-2 gap-16">
        <Link to="/" className="text-amber-100 hover:text-white">
          Home
        </Link>
        <Link to="/cars" className="text-amber-100 hover:text-white">
          Cars
        </Link>
      </nav>
    </div>
  );
}
