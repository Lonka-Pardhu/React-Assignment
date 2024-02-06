import { HashRouter, Routes, Route } from 'react-router-dom';
import ShowsPage from './components/Shows-Page/Shows-Page';
import AboutShow from './components/Show-About-Page/About-Show-Page';
import NoMatch from './components/No-Match-Route/No-Match';
import './App.css'
import ThemeChangeButton from './components/ThemeButton/Theme-Button';

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ShowsPage />} />
          <Route path='/:id' element={<AboutShow />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </HashRouter>
      <ThemeChangeButton />
    </>
  )
}

export default App
