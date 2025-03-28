import { component$, useSignal, $ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile/tile";
import { Filter, type FilterType } from "../components/filter/filter";
import data from "../data/data.json";
import styles from "./index.module.css";

// Define a type for the extension data
interface Extension {
  logo: string;
  name: string;
  description: string;
  isActive: boolean;
}

export default component$(() => {
  const activeFilter = useSignal<FilterType>("all");
  const extensions = useSignal<Extension[]>(data);

  const handleFilterChange$ = $((filter: FilterType) => {
    activeFilter.value = filter;
  });

  const toggleExtensionActive$ = $((name: string) => {
    const updatedExtensions = extensions.value.map(ext => {
      if (ext.name === name) {
        return { ...ext, isActive: !ext.isActive };
      }
      return ext;
    });

    extensions.value = [...updatedExtensions];
  });

  const filteredData = () => {
    if (activeFilter.value === "all") {
      return extensions.value;
    } else if (activeFilter.value === "active") {
      return extensions.value.filter(item => item.isActive);
    } else {
      return extensions.value.filter(item => !item.isActive);
    }
  };

  return (
    <>
      <div class={styles.container}>
        <h1 class={styles.pageTitle}>Extensions List</h1>
        <Filter
          activeFilter={activeFilter.value}
          onFilterChange$={handleFilterChange$}
        />
      </div>

      <div class={styles.tileContainer}>
        {filteredData().map((item) => (
          <Tile 
            key={item.name} 
            src={item.logo} 
            name={item.name} 
            description={item.description} 
            isActive={item.isActive} 
            onToggleActive$={toggleExtensionActive$}
          />
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
