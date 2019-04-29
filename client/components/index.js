/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */

// these components are actually working! Mostly.
export { default as Home } from "./Home";
export { default as jiKeyCalc } from "./jiKeyCalc";
export { default as Form } from "./Form";
export { default as UseForm } from "./UseForm";

// a separate space to deal with the oscillator...Form component was getting a bit long. Unsuccessful refactor.
export { default as playJI } from "./playJI";

// Haps = what happened; wanted to display a table to display all that tuning math. Unsuccessful.
export { default as Haps } from "./Haps";

// side components from a different React Hooks Forms walkthrough...unsuccessful.
export { default as NewForm } from "./NewForm";
export { default as useNewForm } from "./useNewForm";
