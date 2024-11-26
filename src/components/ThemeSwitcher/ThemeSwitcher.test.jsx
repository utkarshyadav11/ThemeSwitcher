import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, ThemeContext } from '../context/ThemeContext';
import ThemeSwitcher from "./ThemeSwitcher.jsx" // Ensure to import the component that uses the context

test('toggles theme between light and dark', () => {
    render(
        <ThemeProvider>
            <ThemeSwitcher />
        </ThemeProvider>
    );

    // Initially, the theme should be light
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    // Find the toggle button and click it to switch to dark mode
    const toggleButton = screen.getByText(/Switch to Dark Mode/i);
    fireEvent.click(toggleButton);

    // After clicking, the theme should be dark
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');

    // Click again to switch back to light mode
    fireEvent.click(toggleButton);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');
});
