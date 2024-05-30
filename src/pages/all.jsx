import { useEffect, useState } from 'react';
import { useData } from '../contexts/DataContext';
import Employee from '../components/employee/Employee';
import Filterbar from '../components/layout/Filterbar';
import List from '../components/layout/List';

export default function AllEmployee() {
  const { employeesData } = useData();
  const [filteredData, setFilteredData] = useState(employeesData);
  const [maxResults, setMaxResults] = useState(9999);
  const [category, setCategory] = useState('all');

  function handleCategory(value) {
    setCategory(value);
  }

  function handleMaxResults(value) {
    setMaxResults(value);
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
    </div>
  );
}
