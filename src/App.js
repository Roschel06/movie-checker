import './Sass/App.scss';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Imprint from './pages/Imprint';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imprint' element={<Imprint />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
