import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useData, useLoading } from '../contexts/DataContext';
// other components
import NotFound from '../components/common/NotFound';
import Loading from '../components/common/Loading';
import Notification from '../components/common/Notification';
// page components
import Navigation from '../components/aboutEmployee/Navigation';
import BasicInfo from '../components/aboutEmployee/BasicInfo';
import SkillsInfo from '../components/aboutEmployee/SkillsInfo';
import Bio from '../components/aboutEmployee/Bio';
import UpdateEmployee from '../components/employee/UpdateEmployee';
import DeleteEmployee from '../components/employee/DeleteEmployee';
// react icons
import TertiaryHeading from '../components/typography/TertiaryHeading';

export default function AboutEmployee() {
  const { id: URL } = useParams();
  const { employeesData } = useData();
  const { isLoading } = useLoading();
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
        <TertiaryHeading h3="Basic Information" />
        <TertiaryHeading h3="Technical Informations" />
        <div className="flex flex-col items-center">
          <img
            src={employee.image}
            alt={employee.name}
            className="h-[128px] w-[128px] rounded-xl border-4 border-slate-800 object-cover shadow-sm"
          />
          <div className="mt-6 flex items-center gap-4">
            <UpdateEmployee
              selected={employee}
              setShowNotification={setShowNotification}
              handleNotification={handleNotification}
            />
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
      {showNotification && (
        <Notification isSuccess={isSuccess} message={message} />
      )}
    </div>
  );
}
