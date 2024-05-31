import { useState, useEffect, useContext, createContext } from 'react';
import supabase from './../services/supabase';
import PropTypes from 'prop-types';
import NotFound from '../components/common/NotFound';
import MainLayout from '../components/layout/MainLayout';

const DataContext = createContext();
const LoadingContext = createContext();

export const DataProvider = ({ children }) => {
  const [employeesData, setEmployeesData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    async function getEmployeesDataFromSupabase() {
      try {
        const { data } = await supabase.from('employee').select('*');
        setEmployeesData(data);
        setIsLoading(false);
        setIsError(false);
        console.log('Successfully fetch data from supabase ');
      } catch (e) {
        setIsError(true);
        console.log('Could not fetch data from supabase.');
      }
    }
    getEmployeesDataFromSupabase();
  }, []);

  if (isError)
    return (
      <MainLayout>
        <NotFound
          title="Failed to load data from API"
          message="We're sorry, but we couldn't load the data from our server at this
          time. Please try again later"
        />
      </MainLayout>
    );

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
