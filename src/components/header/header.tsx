import { component$ } from "@builder.io/qwik";
import styles from "./header.module.css";
import Logo from '~/assets/images/logo.svg?jsx';
import Moon from '~/assets/images/icon-moon.svg?jsx';
import Sun from '~/assets/images/icon-sun.svg?jsx';
import { useTheme } from "~/context/theme-context";

export const Header = component$(() => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div class={styles.header}>
      <span class={styles.logo}>
        <Logo /> Extensions
      </span>
      <button 
        onClick$={toggleTheme}
        class={styles.themeToggle}
        aria-label={`Switch to ${theme.value === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme.value === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}); 