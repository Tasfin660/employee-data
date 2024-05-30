// PIECHAR FROM RECHART.JS
import { PieChart, Pie, Cell } from 'recharts';
import rolesData from '../../data/rolesData';

export default function Piechart({ rolesCounts }) {
  const data = Object.entries(rolesCounts).map(([name, value]) => {
    return { name, value };
  });

  return (
    <PieChart width={200} height={200}>
      <Pie
        data={data}
        innerRadius={60}
        outerRadius={80}
        fill="#34d399"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={rolesData[entry.name]} />
        ))}
      </Pie>
    </PieChart>
  );
}
import PropTypes from 'prop-types';
Piechart.propTypes = {
  rolesCounts: PropTypes.object,
};
