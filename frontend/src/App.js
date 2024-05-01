import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OurServices from './components/OurServices';
import WeBelieve from './components/WeBelieve';
import RecentWorks from './components/RecentWorks';
import Testimonial from './components/Testimonial';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <div className="navbars">
        <Navbar />
      </div>
      <Hero />
      <OurServices />
      <WeBelieve />
      <RecentWorks />
      <div className="testimonial-contact">
        <Testimonial />
        <Contact />
      </div>
      <Footer />
    </>
  );
}

export default App;
