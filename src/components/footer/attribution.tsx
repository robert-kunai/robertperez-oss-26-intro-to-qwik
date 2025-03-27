import { component$ } from "@builder.io/qwik";
import styles from "./attribution.module.css";

export const Attribution = component$(() => {
  return (
    <div class={styles.footer}>
      <p>
        Challenge by 
        <a href="https://www.frontendmentor.io?ref=challenge">
           Frontend Mentor
        </a>
        . Coded by <a href="#">Robert Perez</a>.
      </p>
    </div>
  );
}); 