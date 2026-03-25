import React, { useState, useContext, useEffect } from "react";

const ThemeContext = React.createContext();

export function ThemeProvider({ children }) {
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        localStorage.setItem("theme", theme);
        document.body.setAttribute("data-theme", theme);
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    return useContext(ThemeContext);
}