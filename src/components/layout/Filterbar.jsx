import PropTypes from 'prop-types';
import rolesData from '../../data/rolesData';

export default function FilterEmployee({
  total,
  category,
  onCategory,
  maxResults,
  onMaxResults,
}) {
  const rolesArr = Object.keys(rolesData);

  return (
    <div className="bg-emerald-200 py-8">
      <div className="container mx-auto flex justify-between">
        <div className="flex items-center gap-4">
          <label className="text-lg font-medium text-gray-700">
            Filter by Category
          </label>
          <select
            value={category}
            className="w-[250px] rounded-full border-2 border-[#ffda79] bg-[#ffda79] px-4 py-2 text-[#5a3e2b] shadow-sm outline-none"
            onChange={e => onCategory(e.target.value)}
          >
            {Array.from({ length: rolesArr.length }, (_, i) => (
              <option key={i} value={rolesArr[i]}>
                {rolesArr[i]}
              </option>
            ))}
            <option value="all">All Category</option>
          </select>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-lg font-medium text-gray-700">Total Employee</p>
          <p className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl text-emerald-400 shadow-sm">
            {total}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <label className="text-lg font-medium text-gray-700">
            Maximum Results
          </label>
          <select
            value={maxResults}
            className="w-[80px] rounded-full border-2 border-[#ffda79] bg-[#ffda79] px-4 py-2 text-[#5a3e2b] shadow-sm outline-none"
            onChange={e => onMaxResults(e.target.value)}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <option value={5 * (i + 1)} key={i}>
                {5 * (i + 1)}
              </option>
            ))}
            <option value={9999}>All</option>
          </select>
        </div>
      </div>
    </div>
  );
}
// FilterEmployee.propTypes = {
//   total: PropTypes.number,
//   category: PropTypes.string,
//   onCategory: PropTypes.func,
//   maxResults: PropTypes.string | PropTypes.number,
//   onMaxResults: PropTypes.func,
// };
