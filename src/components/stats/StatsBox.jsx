import React from 'react';
import PropTypes from 'prop-types';
import rolesData from '../../data/rolesData';
// REACT ICONS
import { BiSolidMagicWand } from 'react-icons/bi';
import { FaVideoSlash } from 'react-icons/fa6';
import { AiFillAppstore } from 'react-icons/ai';
import { FaGamepad } from 'react-icons/fa';
import { CgWebsite } from 'react-icons/cg';
import { IoSchoolSharp } from 'react-icons/io5';
import TertiaryHeading from '../typography/TertiaryHeading';

export default function StatsBox({ rolesNames, rolesCounts }) {
  const icons = [
    <BiSolidMagicWand key="graphics design" />,
    <FaVideoSlash key="video editing" />,
    <AiFillAppstore key="software dev" />,
    <FaGamepad key="game developer" />,
    <CgWebsite key="website develoepr" />,
    <IoSchoolSharp key="university student" />,
  ];

  return (
    <div>
      <TertiaryHeading h3="All Roles Stats" />
      <ul
        className="mt-6 grid grid-cols-[max-content,max-content,1fr] gap-x-6 gap-y-2 rounded-b-xl border-t-2 border-emerald-400 bg-[#fdfdfd] p-10
         text-lg shadow-lg"
      >
        {Array.from({ length: rolesNames.length }, (_, i) => (
          <React.Fragment key={i}>
            <p
              className="translate-y-1"
              style={{ color: `${rolesData[rolesNames[i]]}` }}
            >
              {icons[i]}
            </p>
            <p style={{ color: `${rolesData[rolesNames[i]]}` }}>
              {rolesNames[i]}
            </p>
            <p className="text-slate-600">{rolesCounts[rolesNames[i]]}</p>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
}
StatsBox.propTypes = {
  rolesNames: PropTypes.array,
  rolesCounts: PropTypes.object,
};
