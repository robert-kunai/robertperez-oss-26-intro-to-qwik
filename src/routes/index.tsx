import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile/tile";
import { Attribution } from "../components/footer/attribution";
import data from "../data/data.json";

export default component$(() => {
  return (
    <>
      {data.map((item) => (
        <Tile key={item.name} src={item.logo} name={item.name} description={item.description} isActive={item.isActive} />
      ))}
      <Attribution />
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
