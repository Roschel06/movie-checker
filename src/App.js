import './Sass/App.scss';
import {Routes, Route} from 'react-router-dom'
import Imprint from './pages/Imprint';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import Movie from './components/Movie';
import Layout from './components/Layout';
import ContextProvider from './components/Context';
import GenreResult from './pages/GenreResult';


function App() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/imprint' element={<Imprint />} />
          <Route path='/searchresult/:query' element={<SearchResult />} />
          <Route path='/movie/:id' element={<Movie />} />
          <Route path='/genre/:id' element={<GenreResult />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}

export default App;
