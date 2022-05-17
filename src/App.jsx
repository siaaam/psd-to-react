import './App.css';
import Layout from './components/layout/Layout';
import ScrollBottom from './components/ScrollBottom';
import About from './sections/About';
import Contact from './sections/Contact';
import FeaturedTeam from './sections/FeaturedTeam';
import Home from './sections/Home';
import Projects from './sections/Projects';
import Promo from './sections/Promo';
import Services from './sections/Services';
import Teams from './sections/Teams';

// import '../node_modules/slick-carousel/slick/slick.css';
// import '../node_modules/slick-carousel/slick/slick-theme.css';

function App() {
  return (
    <Layout>
      <Home />
      <About />
      <Promo />
      <Services />
      <Teams />
      <Projects />
      <FeaturedTeam />
      <Contact />
      <ScrollBottom />
    </Layout>
  );
}

export default App;
