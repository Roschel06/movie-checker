import './Sass/App.scss';
import {Routes, Route} from 'react-router-dom'
import Imprint from './pages/Imprint';
import Home from './pages/Home';
import Footer from './components/Footer';
import SearchResult from './pages/SearchResult';
import Movie from './components/Movie';
import Layout from './components/Layout';


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/imprint' element={<Imprint />} />
          <Route path='/searchresult/:query' element={<SearchResult />} />
          <Route path='/movie/:id' element={<Movie />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
