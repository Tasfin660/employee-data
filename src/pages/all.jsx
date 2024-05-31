import { useEffect, useState } from 'react';
import { useData } from '../contexts/DataContext';
import Filterbar from '../components/layout/Filterbar';
import List from '../components/layout/List';
import Notification from '../components/common/Notification';

export default function AllEmployee() {
  const { employeesData } = useData();
  const [filteredData, setFilteredData] = useState(employeesData);
  const [maxResults, setMaxResults] = useState(9999);
  const [category, setCategory] = useState('all');
  const [showNotification, setShowNotification] = useState(false);
  const [isSuccess, setIsSuccess] = useState();
  const [message, setMessage] = useState();

  useEffect(() => {
    document.title = 'Employee Data | All';
  }, []);

  function handleCategory(value) {
    setCategory(value);
  }

  function handleMaxResults(value) {
    setMaxResults(value);
  }

  function handleNotification(isSuccess, message) {
    setIsSuccess(isSuccess);
    setMessage(message);
  }

  useEffect(() => {
    (function filterEmployeeData() {
      setFilteredData(
        employeesData
          .filter(employee => category === employee.role || category === 'all')
          .slice(0, maxResults),
      );
    })();
  }, [category, maxResults, employeesData]);

  return (
    <div>
      <Filterbar
        total={employeesData.length}
        category={category}
        onCategory={handleCategory}
        maxResults={maxResults}
        onMaxResults={handleMaxResults}
      />
      <List element={filteredData} filterRating={-1}></List>
      {showNotification && (
        <Notification isSuccess={isSuccess} message={message} />
      )}
    </div>
  );
}
