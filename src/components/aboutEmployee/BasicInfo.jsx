import PropTypes from 'prop-types';

export default function BasicInfo({
  employee: { name, email = '', birthday = '', location = '', phone = '' },
}) {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  function formatName(name) {
    if (name)
      return name
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
  }
  function formatEmail(email) {
    if (email) {
      return email.replace('example', 'google');
    }
  }
  function formatBirthday(birthday) {
    if (birthday) {
      const [day, month, year] = birthday.split('/');
      return `${day} ${months[parseInt(month, 10) - 1]} ${year}`;
    }
  }
  return (
    <ul className="grid grid-cols-[repeat(2,max-content)] gap-x-4 gap-y-1 rounded-xl border-4 border-emerald-200 p-6 text-slate-600 shadow-md">
      <li className="text-emerald-400">Name</li> :&nbsp;&nbsp;
      {formatName(name)}
      <li className="text-emerald-400">Email</li> :&nbsp;&nbsp;
      {formatEmail(email)}
      <li className="text-emerald-400">Birthday</li> :&nbsp;&nbsp;
      {formatBirthday(birthday)}
      <li className="text-emerald-400">Location</li> :&nbsp;&nbsp;
      {location}
      <li className="text-emerald-400">Phone</li> :&nbsp;&nbsp;
      {phone}
    </ul>
  );
}
BasicInfo.propTypes = {
  employee: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    birthday: PropTypes.string,
    location: PropTypes.string,
    phone: PropTypes.string,
  }),
};
