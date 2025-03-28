import { PropFunction } from "@builder.io/qwik";

export interface ITileProps {
    src: string;
    name: string;
    description: string;
    isActive: boolean;
    onToggleActive$: PropFunction<(name: string) => void>;
  }