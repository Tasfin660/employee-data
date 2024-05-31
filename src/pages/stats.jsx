import { useEffect } from 'react';
import { useData } from '../contexts/DataContext';
import ChartBox from '../components/stats/ChartBox';
import Piechart from '../components/common/Piechart';
import StatsBox from '../components/stats/StatsBox';

export default function Stats() {
  const { employeesData } = useData();
  useEffect(() => {
    document.title = 'Employee Data | Stats';
  }, []);
  function countItems(rolesNames) {
    const obj = {};
    rolesNames.forEach(element => {
      if (obj[element]) {
        obj[element]++;
      } else {
        obj[element] = 1;
      }
    });
    return obj;
  }
  let rolesCounts = countItems(employeesData.map(el => el.role));
  const rolesNames = Object.keys(rolesCounts);

  return (
    <div className="container mx-auto flex items-center justify-center gap-16">
      <ChartBox>
        <Piechart rolesCounts={rolesCounts} />
      </ChartBox>
      <StatsBox rolesCounts={rolesCounts} rolesNames={rolesNames} />
    </div>
  );
}
