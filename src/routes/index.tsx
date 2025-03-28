import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile/tile";
import data from "../data/data.json";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <h1 class={styles.pageTitle}>Extensions List</h1>
      
      <div class={styles.filterContainer}>
        <button class={`${styles.filterButton} ${styles.active}`}>All</button>
        <button class={styles.filterButton}>Active</button>
        <button class={styles.filterButton}>Inactive</button>
      </div>
      
      <div class={styles.tileContainer}>
        {data.map((item) => (
          <Tile key={item.name} src={item.logo} name={item.name} description={item.description} isActive={item.isActive} />
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Extension Manager",
  meta: [
    {
      name: "description",
      content: "Manage your browser extensions easily",
    },
  ],
};
