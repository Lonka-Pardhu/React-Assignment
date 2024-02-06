import { useContext } from "react";
import { ThemeButtonContainer, ThemeButton } from "./Theme-Button-Styled"
import { FaMoon, FaSun } from "react-icons/fa";
import ThemeContext from "../Context/Theme-Context";

const ThemeChangeButton = () => {
    const { themeMode, setThemeMode } = useContext(ThemeContext)

    const handleThemeChange = () => {
        setThemeMode(themeMode => !themeMode)
    }

    return (
        <ThemeButtonContainer>
            <ThemeButton themeState={themeMode} onClick={handleThemeChange}>
                {themeMode ? 'Light' : 'Dark'}
                {themeMode ? <FaSun /> : <FaMoon />}
            </ThemeButton>
        </ThemeButtonContainer>
    )
}

export default ThemeChangeButton;