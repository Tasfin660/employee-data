import { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import supabase from '../../services/supabase';
import rolesData from '../../data/rolesData';

export default function UpdateEmployee({ selected, onModal }) {
  const { employeesData } = useData();
  const [name, setName] = useState(selected.name);
  const [role, setRole] = useState(selected.role);
  const [rating, setRating] = useState(selected.rating);
  const rolesNames = Object.keys(rolesData);

  async function handleUpdate() {
    const userPassword = prompt(
      'Please provide the password for authentication purposes',
    );
    if (userPassword === import.meta.env.VITE_AUTHENTICATON_PASSCODE) {
      let { data, error } = await supabase
        .from('employee')
        .update([
          {
            name,
            role,
            rating,
          },
        ])
        .eq('id', selected.id)
        .select();
      employeesData.forEach((employee, index) => {
        if (employee.id === selected.id) {
          employeesData[index] = {
            ...employeesData[index],
            ...data[0],
          };
        }
      });

      error
        ? console.log(
            `There was en error in updating ${selected.name} into the database. Message: ` +
              error,
          )
        : console.log(
            `${selected.name} is updated into the database successfully`,
          );
    } else alert('Sorry, authentication password is wrong');
    onModal();
  }

  return (
    <div>
      <div
        className="animation-modal fixed left-1/2 top-[40%]
       z-50 rounded-xl bg-slate-900 shadow-xl"
      >
        <p className="mt-8 text-center text-2xl font-bold text-emerald-600">
          UPDATE:&nbsp; {selected.name} ?
        </p>
        <div className="my-8 px-16">
          <div className="grid grid-cols-[max-content,1fr] items-center gap-x-4 gap-y-6">
            <label className="text-sm font-semibold text-gray-400">
              Full Name
            </label>
            <input
              type="text"
              className="w-[250px] rounded-full border-2 border-emerald-500 bg-emerald-500
              px-4 py-[6px] text-white shadow-sm outline-none placeholder:text-gray-800"
              placeholder={name}
              onChange={e => setName(e.target.value)}
            />
            <label className="justify-self-end text-sm font-semibold text-gray-400">
              Role
            </label>
            <select
              value={role}
              className="w-[250px] rounded-full border-2 border-emerald-500 bg-emerald-500
              px-4 py-[6px] text-white shadow-sm outline-none"
              onChange={e => setRole(e.target.value)}
            >
              {Array.from({ length: rolesNames.length }, (_, i) => (
                <option key={i} value={rolesNames[i]}>
                  {rolesNames[i]}
                </option>
              ))}
            </select>
            <label className="justify-self-end text-sm font-semibold text-gray-400">
              Rating
            </label>
            <select
              value={rating}
              className="w-max rounded-full border-2 border-emerald-500 bg-emerald-500
              px-4 py-[6px] text-white shadow-sm outline-none"
              onChange={e => setRating(e.target.value)}
            >
              {Array.from({ length: 5 }, (_, i) => (
                <option value={i + 1} key={i}>
                  {i + 1}
                </option>
              ))}
            </select>
            <div className="col-start-2 col-end-3 mt-4 flex gap-4 justify-self-end">
              <button
                className="rounded-full bg-red-600 px-4 py-[6px]
              text-white shadow-md duration-300 hover:bg-red-700"
                onClick={onModal}
              >
                Cancel
              </button>
              <button
                className="rounded-full bg-emerald-500 px-4 py-[6px]
              text-white shadow-md duration-300 hover:bg-emerald-600"
                onClick={() => handleUpdate()}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed left-0 top-0 z-10 h-full w-full bg-black bg-opacity-60 backdrop-blur-sm"></div>
    </div>
  );
}
import PropTypes from 'prop-types';
UpdateEmployee.propTypes = {
  selected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    role: PropTypes.string,
    rating: PropTypes.number,
  }),
  onModal: PropTypes.func,
};
