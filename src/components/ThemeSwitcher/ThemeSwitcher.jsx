import useTheme from "../hooks/useTheme";
import "./ThemeSwitcher.css"
const ThemeSwitcher = () => {
    const { theme, toggleTheme, updateCustomColors } = useTheme();

    const handleColorChange = (key, value) => {
        updateCustomColors({ [key]: value });
    };

    return (
        <div className="Theme_outer">
            <button onClick={toggleTheme}>
                Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
            </button>
            <div>
                <label>
                    Background Color:
                    <input
                        type="color"
                        onChange={(e) => handleColorChange('background', e.target.value)}
                    />
                </label>
                <label>
                    Text Color:
                    <input
                        type="color"
                        onChange={(e) => handleColorChange('text', e.target.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default ThemeSwitcher;
