import PropTypes from 'prop-types';

export default function SecondaryHeading({ span, h2 }) {
  return (
    <div className="container mx-auto">
      <span className="text-sm font-medium uppercase tracking-wide text-yellow-500">
        {span}
      </span>
      <h2 className="mb-10 text-nowrap text-3xl font-semibold text-gray-600">
        {h2}
      </h2>
    </div>
  );
}
SecondaryHeading.propTypes = {
  span: PropTypes.string,
  h2: PropTypes.string,
};
