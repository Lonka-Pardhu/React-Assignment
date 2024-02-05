import { useState } from "react";
import { ThemeButtonContainer, ThemeButton } from "./Theme-Button-Styled"
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeChangeButton = () => {
    const [themeMode, setThemeMode] = useState(true)

    const handleThemeChange = () => {
        setThemeMode(themeMode => !themeMode)
    }

    return (
        <ThemeButtonContainer>
            <ThemeButton onClick={handleThemeChange}>{themeMode ? 'Light' : 'Dark'}
                {themeMode ? <FaSun /> : <FaMoon />}</ThemeButton>
        </ThemeButtonContainer>
    )
}

export default ThemeChangeButton;