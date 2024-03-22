
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css'
import Subjects from './components/Subjects/Subjects';
import Tutors from './components/Tutors/Tutors';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <div>
        <div className="pink-gradient"/>
      <Header/>
      <Hero/>
      </div>
      <Subjects/>
      <Tutors/>
      <Value/>
      <Contact/>
      <GetStarted/>
      <Footer/>
    </div>
  );
}

export default App;
