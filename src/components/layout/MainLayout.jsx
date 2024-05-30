import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout({ children }) {
  return (
    <div className="grid h-screen grid-rows-[max-content,1fr,max-content]">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node,
};
