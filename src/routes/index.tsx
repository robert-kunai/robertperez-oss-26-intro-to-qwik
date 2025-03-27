import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile/tile";
import data from "../data/data.json";
import styles from "./index.module.css";

export default component$(() => {
  return (
    <>
      <div class={styles.tileContainer}>
        {data.map((item) => (
          <Tile key={item.name} src={item.logo} name={item.name} description={item.description} isActive={item.isActive} />
        ))}
      </div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
