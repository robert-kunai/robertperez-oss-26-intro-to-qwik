import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile/tile";
import { Filter, type FilterType } from "../components/filter/filter";
import data from "../data/data.json";
import styles from "./index.module.css";

export default component$(() => {
  const activeFilter = useSignal<FilterType>("all");

  const handleFilterChange$ = $((filter: FilterType) => {
    activeFilter.value = filter;
  });

  const filteredData = () => {
    if (activeFilter.value === "all") {
      return data;
    } else if (activeFilter.value === "active") {
      return data.filter(item => item.isActive);
    } else {
      return data.filter(item => !item.isActive);
    }
  };

  return (
    <>
      <h1 class={styles.pageTitle}>Extensions List</h1>
      
      <Filter activeFilter={activeFilter.value} onFilterChange$={handleFilterChange$} />
      
      <div class={styles.tileContainer}>
        {filteredData().map((item) => (
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
