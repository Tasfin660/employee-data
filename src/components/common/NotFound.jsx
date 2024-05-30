import PropTypes from 'prop-types';
// REACT ICON
import { BiSolidError } from 'react-icons/bi';

export default function NotFound({ message }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col rounded-xl bg-yellow-100 p-4">
        <div className="flex items-center gap-4 border-l-4 border-red-500 bg-yellow-300  p-4 font-medium text-red-500">
          <BiSolidError className="text-4xl" />
          <p className="text-xl">{message}</p>
        </div>
        <p className="mt-4 w-[370px] self-center text-slate-800">
          Please check the ID and try again. If the problem persists, contact
          support for assistance
        </p>
      </div>
    </div>
  );
}
NotFound.propTypes = {
  message: PropTypes.string,
};
