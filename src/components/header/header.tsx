import { component$, useContextProvider, useSignal } from "@builder.io/qwik";
import styles from "./header.module.css";
import Logo from '~/assets/images/logo.svg?jsx';
import Moon from '~/assets/images/icon-moon.svg?jsx';
import Sun from '~/assets/images/icon-sun.svg?jsx';
import { ThemeContext } from "~/context/theme-context";

export const Header = component$(() => {
  const theme = useSignal('dark');

  useContextProvider(ThemeContext, theme);

  return (
    <div class={styles.header}>
      <Logo />
      <button 
        onClick$={() =>
          (theme.value = theme.value == 'dark' ? 'light' : 'dark')
        }
        class={styles.themeToggle}
        aria-label={`Switch to ${theme.value === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme.value === 'dark' ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}); 