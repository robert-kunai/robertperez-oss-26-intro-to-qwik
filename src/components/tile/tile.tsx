import { component$, $ } from "@builder.io/qwik";
import type { ITileProps } from "../../types";
import styles from "./tile.module.css";

export const Tile = component$<ITileProps>(
  ({ src, name, description, isActive, onToggleActive$ }) => {
    const handleButtonClick$ = $(() => {
      onToggleActive$(name);
    });

    const handleToggleChange$ = $(() => {
      onToggleActive$(name);
    });

    return (
      <div class={`${styles.tile} ${isActive ? styles.active : ""}`}>
        <div class={styles.tileContent}>
          <div>
            <img src={src} alt={name} width={48} height={48} />
          </div>
          <div>
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>
        <div class={styles.buttonContainer}>
          <button
            class={`${styles.button} ${isActive ? styles.remove : ""}`}
            onClick$={handleButtonClick$}
          >
            {isActive ? "Remove" : "Add to Chrome"}
          </button>
          <label class={styles.toggleLabel}>
            <input
              type="checkbox"
              checked={isActive}
              class={styles.toggleSwitch}
              aria-label={`Toggle ${name} extension`}
              onChange$={handleToggleChange$}
            />
            <span class={styles.toggleTrack}></span>
          </label>
        </div>
      </div>
    );
  }
);
