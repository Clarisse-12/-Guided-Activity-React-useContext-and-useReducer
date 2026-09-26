/* Navbar Component */

import React from "react";
import { useTheme } from "../context/ThemeContext";
import styles from "./Navbar.module.css";
import { LIGHT_THEME, DARK_THEME } from "../constants/theme";

const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className={styles.navbar}>
        <span className={styles.brand}>ReactApp</span>
        <button className={styles.toggleButton} onClick={toggleTheme}>
         switch to {theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME} mode
        </button>
    </nav>
  );
};

export default Navbar;