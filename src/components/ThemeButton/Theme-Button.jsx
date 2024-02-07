import { ThemeButtonContainer, ThemeButton } from "./Theme-Button-Styled"
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../Context/Theme-Context";

const ThemeChangeButton = () => {
    const { themeMode, setThemeMode } = useTheme();

    const handleThemeChange = () => {
        setThemeMode(themeMode => !themeMode)
    }

    return (
        <ThemeButtonContainer>
            <ThemeButton themeState={themeMode} onClick={handleThemeChange}>
                {themeMode ? 'Dark' : 'Light'}
                {themeMode ? <FaMoon /> : <FaSun />}
            </ThemeButton>
        </ThemeButtonContainer>
    )
}

export default ThemeChangeButton;