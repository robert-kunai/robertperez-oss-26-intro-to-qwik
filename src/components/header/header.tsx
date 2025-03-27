import { component$, useContextProvider, useSignal, useTask$, $ } from "@builder.io/qwik";
import styles from "./header.module.css";
import Logo from '~/assets/images/logo.svg?jsx';
import Moon from '~/assets/images/icon-moon.svg?jsx';
import Sun from '~/assets/images/icon-sun.svg?jsx';
import { ThemeContext } from "~/context/theme-context";

export const Header = component$(() => {
  const theme = useSignal('dark');

  useTask$(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'dark';
      theme.value = storedTheme;
      document.documentElement.setAttribute('data-theme', storedTheme);
    }
  });

  const toggleTheme = $(() => {
    theme.value = theme.value === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', theme.value);
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme.value);
    }
  });

  useContextProvider(ThemeContext, theme);

  return (
    <div class={styles.header}>
      <Logo />
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