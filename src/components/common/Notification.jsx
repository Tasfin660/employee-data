import PropTypes from 'prop-types';
// REACT ICONS
import { FaCheckCircle } from 'react-icons/fa';
import { MdError } from 'react-icons/md';

export default function SuccessMessage({ message, isSuccess }) {
  const backgroundColor = isSuccess
    ? 'from-emerald-500 to-emerald-400'
    : 'from-red-600 to-red-500';
  return (
    <div
      className={`fixed right-[-400px] top-[120px] flex items-center gap-4 rounded-full bg-gradient-to-r p-4 shadow-md ${backgroundColor} animation-message`}
    >
      <div className="text-xl text-[#fcfcfc]">
        {isSuccess ? <FaCheckCircle /> : <MdError />}
      </div>
      <p className="text-lg font-medium text-[#fcfcfc]">{message}</p>
    </div>
  );
}
SuccessMessage.propTypes = {
  message: PropTypes.string,
  isSuccess: PropTypes.bool,
};
