import {
  createHooks,
  createConditions,
  createComponent,
  createStyleProps,
} from "@embellish/react";

const { StyleSheet, hooks } = createHooks([
  ".group:focus-within &",
  ".group:has(:placeholder-shown) &",
]);

const conditions = createConditions(hooks, {
  groupFocus: ".group:focus-within &",
  groupPlaceholderShown: ".group:has(:placeholder-shown) &",
});

const styleProps = createStyleProps([
  "border",
  "borderRadius",
  "display",
  "fontSize",
  "gridColumn",
  "gridRow",
  "margin",
  "marginTop",
  "padding",
  "paddingInline",
  "transform",
  "transition",
  "visibility",
  "whiteSpace",
  "width",
]);

const Box = createComponent({
  displayName: "Box",
  conditions,
  styleProps,
});

export { StyleSheet, Box };
