import { component$, type PropFunction } from "@builder.io/qwik";
import styles from "./filter.module.css";

export type FilterType = "all" | "active" | "inactive";

export interface FilterProps {
  activeFilter: FilterType;
  onFilterChange$: PropFunction<(filter: FilterType) => void>;
}

export const Filter = component$<FilterProps>(({ activeFilter, onFilterChange$ }) => {
  return (
    <div class={styles.container}>
      <button 
        class={`${styles.button} ${activeFilter === "all" ? styles.active : ""}`}
        onClick$={() => onFilterChange$("all")}
      >
        All
      </button>
      <button 
        class={`${styles.button} ${activeFilter === "active" ? styles.active : ""}`}
        onClick$={() => onFilterChange$("active")}
      >
        Active
      </button>
      <button 
        class={`${styles.button} ${activeFilter === "inactive" ? styles.active : ""}`}
        onClick$={() => onFilterChange$("inactive")}
      >
        Inactive
      </button>
    </div>
  );
}); 