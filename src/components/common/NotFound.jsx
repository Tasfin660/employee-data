import PropTypes from 'prop-types';
// REACT ICON
import { BiSolidError } from 'react-icons/bi';

export default function NotFound({ title, message }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col rounded-xl bg-yellow-100 p-4">
        <div className="flex items-center gap-4 border-l-4 border-red-500 bg-yellow-300  p-4 font-medium text-red-500">
          <BiSolidError className="text-4xl" />
          <p className="text-xl">{title}</p>
        </div>
        <p className="mt-4 max-w-[500px] self-center text-slate-800">
          {message}
        </p>
      </div>
    </div>
  );
}
NotFound.propTypes = {
  title: PropTypes.string,
  message: PropTypes.string,
};
