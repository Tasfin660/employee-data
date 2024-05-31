import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useData, useLoading } from '../contexts/DataContext';
// UTILITIES
import NotFound from '../components/common/NotFound';
import Loading from '../components/common/Loading';
import Notification from '../components/common/Notification';
// PAGE COMPONENTS
import Navigation from '../components/aboutEmployee/Navigation';
import BasicInfo from '../components/aboutEmployee/BasicInfo';
import SkillsInfo from '../components/aboutEmployee/SkillsInfo';
import Bio from '../components/aboutEmployee/Bio';
import UpdateEmployee from '../components/employee/UpdateEmployee';
// REACT ICONS
import { FaEdit } from 'react-icons/fa';
import DeleteEmployee from '../components/employee/DeleteEmployee';

export default function AboutEmployee() {
  const { id: URL } = useParams();
  const { employeesData } = useData();
  const { isLoading } = useLoading();
  const [showModal, setShowModal] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    document.title = `Employee ID: ${URL}`;
  }, []);

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

  function handleNotification(isSuccess, message) {
    setIsSuccess(isSuccess);
    setMessage(message);
  }

  if (isLoading) return <Loading />;

  if (!employee)
    return (
      <NotFound
        title={`Employee doesn't exist on this ID: ${URL}`}
        message="Please check the ID and try again. If the problem persists, contact
  support for assistance"
      />
    );

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
            <DeleteEmployee
              selected={employee}
              setShowNotification={setShowNotification}
              handleNotification={handleNotification}
            />
          </div>
        </div>
        <BasicInfo employee={employee} />
        <SkillsInfo employee={employee} />
        <Bio />
      </div>
      {showModal && (
        <UpdateEmployee
          selected={employee}
          onModal={handleModal}
          setShowNotification={setShowNotification}
          handleNotification={handleNotification}
        />
      )}
      {showNotification && (
        <Notification isSuccess={isSuccess} message={message} />
      )}
    </div>
  );
}
