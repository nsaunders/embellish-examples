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

const styleProps = createStyleProps({
  border: true,
  borderRadius: true,
  display: true,
  fontSize: true,
  gridColumn: true,
  gridRow: true,
  margin: true,
  marginTop: true,
  padding: true,
  paddingInline: true,
  transform: true,
  transition: true,
  visibility: true,
  whiteSpace: true,
  width: true,
});

const Box = createComponent({
  displayName: "Box",
  conditions,
  styleProps,
});

export { StyleSheet, Box };
