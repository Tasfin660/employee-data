import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-20 flex justify-center bg-slate-900 py-6">
      <ul className="flex gap-10 text-lg text-gray-300">
        <li className="nav-link duration-300 hover:text-emerald-500">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-link duration-300 hover:text-emerald-500">
          <Link to="/all">All Employees</Link>
        </li>
        <li className="nav-link duration-300 hover:text-emerald-500">
          <Link to="/stats">Stats</Link>
        </li>
      </ul>
    </nav>
  );
}
