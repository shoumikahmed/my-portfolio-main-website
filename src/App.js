import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero'
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-white relative'>
      <Header></Header>
      <Hero></Hero>
      <About></About>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Footer></Footer>
      {/* <div style={{ height: '2000px' }}></div> */}
    </div>
  );
}

export default App;
