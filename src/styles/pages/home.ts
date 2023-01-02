import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  // gap: "3rem",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1100px) / 2))",
  marginLeft: "auto",
  minHeight: 656,
});

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: 8,
  // padding: "0.25rem",
  cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,

    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    button: {
      color: "$white",

      backgroundColor: "$green500",

      padding: "0.75rem",

      borderRadius: 6,
      border: 0,

      display: "flex",

      justifyContent: "center",
      alignItems: "center",

      "&:hover": {
        backgroundColor: "$green300",
        cursor: "pointer",
      },
    },

    div: {
      display: "flex",
      flexDirection: "column",

      justifyContent: "flex-start",
      alignItems: "flex-start",

      gap: "0.25rem",

      strong: {
        fontSize: "$lg",
        fontFamily: "Roboto",
        lineHeight: 1.6,
        color: "$gray100",
      },

      span: {
        fontSize: "$xl",
        fontWeight: "bold",
        color: "$green300",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },

  "&:active": {
    cursor: "grabbing",
  },
});
