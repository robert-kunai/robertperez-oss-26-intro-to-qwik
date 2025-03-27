import { type Signal} from '@builder.io/qwik';
import {
  createContextId,
} from '@builder.io/qwik';
 
export const ThemeContext = createContextId<Signal<string>>(
  'theme-context'
);