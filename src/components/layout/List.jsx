import PropTypes from 'prop-types';
import { useData, useLoading } from '../../contexts/DataContext';
import Employee from '../employee/Employee';
import Loading from '../common/Loading';

export default function List({ element, filterRating, children }) {
  const { employeesData } = useData();
  const { isLoading } = useLoading();
  const data = element || employeesData;
  if (!isLoading) return <Loading />;
  return (
    <div className="container mx-auto py-16">
      {children}
      <div className="grid grid-cols-4 items-center justify-center gap-y-12">
        {data.map(employee =>
          employee.rating >= filterRating ? (
            <Employee key={employee.id} employee={employee} />
          ) : null,
        )}
      </div>
    </div>
  );
}
List.propTypes = {
  element: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  filterRating: PropTypes.number,
  children: PropTypes.node,
};
