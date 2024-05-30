import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// REACT ICON
import { IoIosArrowForward } from 'react-icons/io';

export default function Navigation({ employee: { name } }) {
  return (
    <div className="flex w-max items-center gap-1 bg-emerald-100 px-2 py-1 text-sm text-emerald-500">
      <Link to="/all" className="hover:underline">
        All Employee
      </Link>
      <IoIosArrowForward />
      <button
        className="capitalize hover:underline"
        onClick={() => {
          window.location.reload();
        }}
      >
        {name}
      </button>
    </div>
  );
}
Navigation.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
  }),
};
