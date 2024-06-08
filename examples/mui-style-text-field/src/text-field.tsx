import type { CSSProperties, ReactNode } from "react";
import { Box } from "./box";

export type TextFieldBaseProps = {
  label: string;
  render: (_: { placeholder: string; style: CSSProperties }) => ReactNode;
};

export function TextFieldBase({ label, render }: TextFieldBaseProps) {
  return (
    <Box as="label" className="group" display="grid" marginTop="-0.375em">
      <Box
        as="fieldset"
        aria-hidden="true"
        transition="border linear 150ms"
        margin={0}
        paddingInline="0.75em"
        gridRow={1}
        gridColumn={1}
        borderRadius={4}
        border="1px solid #fff"
        groupFocus:border="2px solid #36cdb2"
      >
        <Box
          as="legend"
          conditions={{
            notGroupFocusAndPlaceholderShown: {
              and: [{ not: "groupFocus" }, "groupPlaceholderShown"],
            },
          }}
          paddingInline={2}
          visibility="hidden"
          fontSize="0.875em"
          whiteSpace="nowrap"
          notGroupFocusAndPlaceholderShown:width={0}
          notGroupFocusAndPlaceholderShown:padding={0}
        >
          {label}
        </Box>
      </Box>
      <Box
        conditions={{
          groupFocusOrPlaceholderHidden: {
            or: ["groupFocus", { not: "groupPlaceholderShown" }],
          },
        }}
        gridRow={1}
        gridColumn={1}
        margin="calc(0.75em + 4px)"
        marginTop="calc(1.25em + 4px)"
        transition="transform linear 150ms"
        groupFocusOrPlaceholderHidden:transform="translateY(calc(-1.375em - 4px))"
      >
        <Box
          as="span"
          conditions={{
            groupFocusOrPlaceholderHidden: {
              or: ["groupFocus", { not: "groupPlaceholderShown" }],
            },
          }}
          transition="font-size linear 150ms, color linear 150ms"
          groupFocusOrPlaceholderHidden:fontSize="0.875em"
        >
          {label}
        </Box>
      </Box>
      {render({
        placeholder: " ",
        style: {
          gridRow: 1,
          gridColumn: 1,
          border: 0,
          padding: 0,
          margin: "calc(0.75em + 4px)",
          marginTop: "calc(1.25em + 4px)",
          outline: 0,
          background: "transparent",
          color: "inherit",
          font: "inherit",
        },
      })}
    </Box>
  );
}

export type BasicTextFieldProps = Omit<TextFieldBaseProps, "render">;

export function BasicTextField(props: BasicTextFieldProps) {
  return <TextFieldBase {...props} render={(props) => <input {...props} />} />;
}
