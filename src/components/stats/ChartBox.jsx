import PropTypes from 'prop-types';

export default function ChartBox({ children }) {
  return (
    <div className="bg-emerald-100 p-10">
      <div className="mb-6 flex items-center justify-center rounded-xl bg-[#fdfdfd] py-4 shadow-md">
        {children}
      </div>
      <div className="w-[250px] text-center text-sm text-slate-600">
        Our IT team is dedicated, skilled, and innovative, consistently
        exceeding expectations and delivering high-quality solutions
      </div>
    </div>
  );
}
ChartBox.propTypes = {
  children: PropTypes.node,
};
