import { createContext } from "react";

const ThemeContext = createContext();

export default ThemeContext;

// const [themeMode, setThemeMode] = useState(true);

// const toggleThemeMode = () => {
//     setThemeMode(prevMode => !prevMode);
// };

// const theme = themeMode ? 'light' : 'dark';
// light: {
//     pageBackground: '#e1f8ff ',
//     textColor: 'black',
//     showEleBackground: '#ededed'
// },
// dark: {
//     pageBackground: '#00000D ',
//     textColor: 'white',
//     showEleBackground: '#0b0c14'
// }