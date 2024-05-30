import { useState, useEffect, useContext, createContext } from 'react';
import supabase from './../services/supabase';
import PropTypes from 'prop-types';

const DataContext = createContext();
const LoadingContext = createContext();

export const DataProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function getEmployeesDataFromSupabase() {
      const { data, error } = await supabase.from('employee').select('*');
      setEmployeesData(data);
      error
        ? console.log('Could not fetch data from supabase. Message: ' + error)
        : console.log('Successfully fetch data from supabase ');
      setIsLoading(false);
    }
    getEmployeesDataFromSupabase();
  }, []);

  return (
    <DataContext.Provider value={{ employeesData, setEmployeesData }}>
      <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
        {children}
      </LoadingContext.Provider>
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);
export const useLoading = () => useContext(LoadingContext);
DataProvider.propTypes = {
  children: PropTypes.node,
};
