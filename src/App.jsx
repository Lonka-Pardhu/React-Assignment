import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ShowsPage from './components/Shows-Page/Shows-Page'
import AboutShow from './components/show-about-page/show-about-page';
import NoMatch from './components/No-Match-Route/No-Match';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ShowsPage />} />
          <Route path='/:id' element={<AboutShow />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
