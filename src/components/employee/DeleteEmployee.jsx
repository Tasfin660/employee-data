import { MdDelete } from 'react-icons/md';
import supabase from '../../services/supabase';
import { useData } from '../../contexts/DataContext';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function DeleteEmployee({ selected }) {
  const { employeesData, setEmployeesData } = useData();
  const navigate = useNavigate();

  async function handleDelete() {
    const passcode = prompt(
      'WARNING: This action will permanently delete the record and cannot be undone. To proceed provide authentication password.',
    );
    if (passcode === import.meta.env.VITE_AUTHENTICATON_PASSCODE) {
      try {
        await supabase
          .from('employee')
          .delete()
          .match({ id: selected.id })
          .select();
        setEmployeesData(employeesData.filter(curr => curr.id !== selected.id));
        navigate('/all');
        console.log(
          `${selected.name} is deleted from the database successfully`,
        );
        // handleNotification(true, `Deleted ${selected.name} successfully`);
      } catch (e) {
        // handleNotification(false, `Couldn't delete ${selected.name} `);
        console.log(
          `There was en error in deleteting ${selected.name} from the database.`,
        );
      }
      /*
       finally {
        setShowNotification(true);
        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
      }*/
    } else alert('Sorry, authentication password is wrong');
  }
  return (
    <button
      className="flex h-[35px] w-[35px] items-center justify-center
rounded-full bg-red-500 text-lg text-white duration-300 hover:bg-red-600 disabled:bg-red-500"
      onClick={handleDelete}
    >
      <MdDelete />
    </button>
  );
}

DeleteEmployee.propTypes = {
  selected: PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.number,
  }),
};
