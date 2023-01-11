import './Sass/App.scss';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Imprint from './pages/Imprint';
import Home from './pages/Home';
import Footer from './components/Footer';
import SearchResult from './pages/SearchResult';


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/imprint' element={<Imprint />} />
        <Route path='/searchresult/:query' element={<SearchResult />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
