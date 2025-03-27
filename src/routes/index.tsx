import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Tile } from "../components/tile";
import data from "../data/data.json";

export default component$(() => {
  return (
    <>
      {data.map((item) => (
        <Tile key={item.name} src={item.logo} name={item.name} description={item.description} isActive={item.isActive} />
      ))}
      <div class="attribution">
        Challenge by{" Robert Perez "}
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>.
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
