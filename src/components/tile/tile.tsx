import { component$ } from "@builder.io/qwik";
import type { ITileProps } from "../../types";
import styles from "./tile.module.css";

export const Tile = component$<ITileProps>(({ src, name, description, isActive }) => {
  return (
    <div class={styles.tile}>
      <img src={src} alt={name} width={64} height={64}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <button class={`${styles.button} ${isActive ? styles.remove : ''}`}>
        {isActive ? "Remove" : "Add to Chrome"}
      </button>
    </div>
  );
}); 