import { component$ } from "@builder.io/qwik";
import type { ITileProps } from "../../types";
import styles from "./tile.module.css";

export const Tile = component$<ITileProps>(({ src, name, description, isActive, onToggleActive$ }) => {
  return (
    <div class={`${styles.tile} ${isActive ? styles.active : ''}`}>
      <img src={src} alt={name} width={64} height={64}/>
      <h2>{name}</h2>
      <p>{description}</p>
      <div class={styles.buttonContainer}>
        <button 
          class={`${styles.button} ${isActive ? styles.remove : ''}`}
          onClick$={() => onToggleActive$(name)}
        >
          {isActive ? "Remove" : "Add to Chrome"}
        </button>
        <label class={styles.toggleLabel}>
          <input 
            type="checkbox" 
            checked={isActive} 
            class={styles.toggleSwitch}
            aria-label={`Toggle ${name} extension`}
            onChange$={() => onToggleActive$(name)}
          />
          <span class={styles.toggleTrack}></span>
        </label>
      </div>
    </div>
  );
}); 