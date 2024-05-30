import PropTypes from 'prop-types';
import rolesData from '../../data/rolesData';
import SkillsSets from '../specific/SkillsSet';
// REACT ICONS
import { IoRadioButtonOnSharp } from 'react-icons/io5';
import { FaStar } from 'react-icons/fa';

export default function SkillsInfo({ employee: { role, rating } }) {
  return (
    <ul className="rounded-xl border-4 border-slate-800 py-5 text-gray-600 shadow-md">
      <div
        className="w-max text-nowrap rounded-r-xl
        px-4 pb-1 pt-[2px] text-sm tracking-wide text-white"
        style={{ backgroundColor: `${rolesData[role]}` }}
      >
        #{role}
      </div>
      <div className="px-6">
        <p className="my-2 flex items-center">
          Rating: {rating}/5
          {<FaStar className="-mt-[2px] ml-1 text-sm text-yellow-500" />}
        </p>
        <p className="flex w-max items-center gap-1 rounded-full bg-emerald-200 py-1 pl-[12px] pr-[14px] text-sm text-emerald-600">
          <IoRadioButtonOnSharp />
          <span>Skills</span>
        </p>
        <SkillsSets role={role} />
      </div>
    </ul>
  );
}
SkillsInfo.propTypes = {
  employee: PropTypes.shape({
    role: PropTypes.string,
    rating: PropTypes.number,
  }),
};
