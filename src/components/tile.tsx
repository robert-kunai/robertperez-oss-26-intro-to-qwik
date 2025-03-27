import { component$ } from "@builder.io/qwik";
import type { ITileProps } from "../types";

export const Tile = component$<ITileProps>(({ src, name, description, isActive }) => {
  return (
    <>
      <div>
        <img src={src} alt={name} width={100} height={150}/>
        <h2>{name}</h2>
        <p>{description}</p>
        <button>
          {isActive ? "Remove" : "Add to Chrome"}
        </button>
      </div>
    </>
  );
});