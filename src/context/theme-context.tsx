import {
  type Signal,
  component$,
  useSignal,
  useVisibleTask$,
  useContextProvider,
  Slot,
  $,
  useContext,
} from "@builder.io/qwik";
import { createContextId } from "@builder.io/qwik";

export const ThemeContext = createContextId<Signal<string>>("theme");

export const ThemeProvider = component$(() => {
  const theme = useSignal<string>("light");

  useVisibleTask$(() => {
    const savedTheme =
      localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    theme.value = savedTheme;
    document.documentElement.setAttribute("data-theme", savedTheme);
  });

  useContextProvider(ThemeContext, theme);

  return <Slot />;
});


export const useTheme = () => {
  const theme = useContext(ThemeContext);

  const toggleTheme = $(() => {
    const newTheme = theme.value === "light" ? "dark" : "light";
    theme.value = newTheme;

    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
    }
  });

  return { theme, toggleTheme };
};
