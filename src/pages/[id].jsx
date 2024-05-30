import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData } from '../contexts/DataContext';
import supabase from '../services/supabase';
// UTILITIES
import NotFound from '../components/common/NotFound';
import Notification from '../components/common/Notification';
// PAGE COMPONENTS
import Navigation from '../components/aboutEmployee/Navigation';
import BasicInfo from '../components/aboutEmployee/BasicInfo';
import SkillsInfo from '../components/aboutEmployee/SkillsInfo';
import Bio from '../components/aboutEmployee/Bio';
import UpdateEmployee from '../components/employee/UpdateEmployee';
import AllEmployee from './all';
// REACT ICONS
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';

export default function AboutEmployee() {
  const { employeesData, setEmployeesData } = useData();
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const { id: URL } = useParams();

  let employee;
  employeesData.forEach(curr => {
    if (curr.id === Number(URL)) employee = curr;
  });

  function handleModal() {
    setShowModal(!showModal);
    !showModal
      ? (document.body.style.overflowY = 'hidden')
      : (document.body.style.overflowY = 'auto');
  }

  async function handleDelete() {
    const passcode = prompt(
      'WARNING: This action will permanently delete the record and cannot be undone. To proceed provide authentication password.',
    );
    if (passcode === import.meta.env.VITE_AUTHENTICATON_PASSCODE) {
      let { data, error } = await supabase
        .from('employee')
        .delete()
        .match({ id: employee.id })
        .select();
      setEmployeesData(employeesData.filter(curr => curr.id !== employee.id));
      error
        ? console.log(
            `There was en error in deleteting ${employee.name} from the database. Message: ` +
              error,
          )
        : (() => {
            navigate('/all');
            console.log(
              `${employee.name} is deleted from the database successfully`,
            );
          })();
    } else alert('Sorry, authentication password is wrong');
  }

  if (!employee)
    return <NotFound message={`Employee doesn't exist on this ID: ${URL}`} />;

  if (!employee)
    return <NotFound message={`Employee doesn't exist on this ID: ${URL}`} />;

  return (
    <div className="container mx-auto py-16">
      <Navigation employee={employee} />
      <div className="grid grid-cols-[max-content,350px,350px] items-start justify-center gap-x-10 gap-y-6">
        <div>&nbsp;</div>
        <h2 className="text-2xl font-semibold text-gray-600">
          Basic Information
        </h2>
        <h2 className="text-2xl font-semibold text-gray-600">
          Technical Informations
        </h2>
        <div className="flex flex-col items-center">
          <img
            src={employee.image}
            alt={employee.name}
            className="h-[128px] w-[128px] rounded-xl border-4 border-slate-800 object-cover shadow-sm"
          />
          <div className="mt-6 flex items-center gap-4">
            <button
              className="flex w-max items-center gap-2 rounded-full
              bg-emerald-500 px-4 py-2 text-white shadow-md duration-300 hover:bg-emerald-600"
              onClick={handleModal}
            >
              <FaEdit />
              <span>Update</span>
            </button>
            <button
              className="flex h-[35px] w-[35px] items-center justify-center
            rounded-full bg-red-500 text-lg text-white duration-300 hover:bg-red-600"
              onClick={handleDelete}
            >
              <MdDelete />
            </button>
          </div>
        </div>
        <BasicInfo employee={employee} />
        <SkillsInfo employee={employee} />
        <Bio />
      </div>
      {showModal && (
        <UpdateEmployee selected={employee} onModal={handleModal} />
      )}
      {/* <Notification message="Employee Updated Successfully" /> */}
    </div>
  );
}
