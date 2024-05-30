import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import rolesData from '../../data/rolesData';
// REACT ICONS
import { FaEye } from 'react-icons/fa';
import { FaRegStar } from 'react-icons/fa';
import { FaStar } from 'react-icons/fa';

export default function Employee({
  employee: { id, name, role, image, rating },
}) {
  return (
    <div className="relative mx-auto  w-[300px] rounded-xl border-2 border-emerald-500 pb-8 shadow-lg">
      <div
        className="my-5 w-max text-nowrap
        rounded-r-xl px-4 pb-1 pt-[2px] text-sm tracking-wide text-white"
        style={{ backgroundColor: `${rolesData[role]}` }}
      >
        #{role}
      </div>
      <div className="flex items-center justify-center gap-6">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={image}
          alt={name}
        />
        <div>
          <p className="text-lg font-medium capitalize text-emerald-500">
            {name}
          </p>
          <div className="mt-1 flex gap-1 text-sm text-yellow-500">
            {Array.from({ length: 5 }, (_, i) => {
              return i < rating ? <FaStar key={i} /> : <FaRegStar key={i} />;
            })}
          </div>
        </div>
      </div>

      <Link to={`/${id}`} className="absolute -bottom-[2px] -right-[2px]">
        <FaEye
          className="rounded-br-xl rounded-tl-xl bg-emerald-500 px-2
         text-4xl text-white duration-300 hover:bg-emerald-600"
        />
      </Link>
    </div>
  );
}
Employee.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    role: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
  }),
};
