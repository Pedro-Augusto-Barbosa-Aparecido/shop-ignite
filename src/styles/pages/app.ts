import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  minHeight: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1100,
  margin: "0 auto",

  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
});

export const CartMenuTrigger = styled("span", {
  color: "$gray400",

  backgroundColor: "$gray800",
  padding: "0.75rem",

  display: "flex",

  justifyContent: "center",
  alignItems: "center",

  border: 0,
  borderRadius: 6,

  position: "relative",

  "&:hover": {
    isolation: "isolate",
    cursor: "pointer",
  },

  span: {
    position: "absolute",

    top: -12,
    right: -12,

    fontSize: "0.875rem",

    textAlign: "center",

    outline: "6px solid $gray900",
    borderRadius: "100%",

    padding: "0.25rem",

    width: 24,
    height: 24,

    backgroundColor: "$green500",
    color: "$white",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
