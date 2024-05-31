import { useState } from 'react';
import { useData } from '../../contexts/DataContext';
import rolesData from '../../data/rolesData';
import supabase from '../../services/supabase';
import Notification from '../common/Notification';

export default function AddEmployee() {
  const { employeesData, setEmployeesData } = useData();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [role, setRole] = useState('disabled');
  const [showNotification, setShowNotification] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const [message, setMessage] = useState();

  const rolesArr = Object.keys(rolesData);

  async function submit(event) {
    event.preventDefault();
    const passcode = prompt(
      'Please provide password for authentication purposes',
    );
    if (passcode === import.meta.env.VITE_AUTHENTICATON_PASSCODE) {
      try {
        let { data } = await supabase
          .from('employee')
          .insert([
            {
              name,
              image,
              role,
            },
          ])
          .select();
        setEmployeesData([...employeesData, data[0]]);

        setIsSuccess(true);
        setMessage(`Successfully added ${name}`);
        console.log(`Successfully added ${name} to the database` + data[0]);
      } catch (e) {
        setIsSuccess(false);
        setMessage(`Couldn't add ${name}`);
        console.log(
          `There was en error in adding ${name} to the database. Message: ` + e,
        );
      } finally {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        setName('');
        setImage('');
        setRole('disabled');
      }
    } else alert('Sorry, authentication password is wrong');
  }

  const isFormValid = () => {
    if (name && image && role !== 'disabled') return true;
    return false;
  };

  return (
    <div className="w-max justify-self-end">
      <p className="mb-8 ml-2 text-3xl font-semibold text-gray-600">
        Add New Employee
      </p>
      <form
        className=" grid grid-cols-[max-content,1fr] items-center gap-x-4
       gap-y-6 rounded-xl bg-white px-10 py-10 shadow-md"
        onSubmit={submit}
      >
        <label className="justify-self-end text-sm font-semibold text-gray-500">
          Full Name
        </label>
        <input
          type="text"
          value={name}
          placeholder="Employee's full name..."
          className="w-[250px] rounded-full border-2 border-emerald-500 px-4 py-[6px] text-gray-500 shadow-sm outline-none placeholder:text-sm"
          onChange={e => setName(e.target.value)}
        />
        <label className="justify-self-end text-sm font-semibold text-gray-500">
          Profile
        </label>
        <input
          type="text"
          value={image}
          placeholder="Employee's profile picture..."
          className="w-[250px] rounded-full border-2 border-emerald-500  px-4 py-[6px] text-gray-500 shadow-sm outline-none placeholder:text-sm"
          onChange={e => setImage(e.target.value)}
        />
        <label className="justify-self-end text-sm font-semibold text-gray-500">
          Role
        </label>
        <select
          value={role}
          className="w-[250px] rounded-full border-2 border-emerald-500 px-4 py-[6px] text-gray-500 shadow-sm outline-none"
          onChange={e => setRole(e.target.value)}
        >
          <option value="disabled" disabled>
            Select an option
          </option>
          {Array.from({ length: rolesArr.length }, (_, i) => (
            <option key={i} value={rolesArr[i]}>
              {rolesArr[i]}
            </option>
          ))}
        </select>
        <button
          className="col-start-2 col-end-3 mt-4 w-max
              cursor-pointer rounded-full bg-emerald-500 px-4 py-2 text-white shadow-md duration-300 hover:bg-emerald-600 disabled:cursor-auto disabled:hover:bg-emerald-500"
          disabled={!isFormValid()}
        >
          Add Employee
        </button>
      </form>
      {showNotification && (
        <Notification isSuccess={isSuccess} message={message} />
      )}
    </div>
  );
}
