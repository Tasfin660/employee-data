import { useEffect } from 'react';
import NotFound from '../components/common/NotFound';

export default function Error() {
  useEffect(() => {
    document.title = 'Not Found';
  }, []);
  return (
    <NotFound
      title="Error: 404 Page Not Found"
      message="Oops! The page you are looking for doesn't exist. Please check the URL or return to the homepage"
    />
  );
}
