import { useState } from "react";
import ThemeContext from "./Theme-Context";

const ThemeContextProvider = ({ children }) => {

    const [themeMode, setThemeMode] = useState(true);

    const lightTheme = {
        pageBackground: '#e1f8ff',
        textColor: '#000000',
        showEleBackground: '#ededed'
    };

    const darkTheme = {
        pageBackground: '#00000D',
        textColor: '#ffffff',
        showEleBackground: '#0b0c14'
    };

    const currentTheme = themeMode ? lightTheme : darkTheme;

    const contextData = { themeMode, setThemeMode, currentTheme };

    return (
        <ThemeContext.Provider value={contextData}>
            {children}
        </ThemeContext.Provider>
    );
}

export default ThemeContextProvider;