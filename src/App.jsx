import { useContext } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import ShowsPage from './components/Shows-Page/Shows-Page';
import AboutShow from './components/Show-About-Page/About-Show-Page';
import NoMatch from './components/No-Match-Route/No-Match';
import './App.css'
import { AppWrapperStyled } from './components/App-Wrapper/App-Wrapper-Styled';
import ThemeChangeButton from './components/ThemeButton/Theme-Button';
import ThemeContext from './components/Context/Theme-Context';


function App() {

  const { currentTheme } = useContext(ThemeContext);

  return (
    <AppWrapperStyled theme={currentTheme}>
      <HashRouter>
        <Routes>
          <Route path='/' element={<ShowsPage />} />
          <Route path='/:id' element={<AboutShow />} />
          <Route path='*' element={<NoMatch />} />
        </Routes>
      </HashRouter>
      <ThemeChangeButton />
    </AppWrapperStyled>
  )
}

export default App

