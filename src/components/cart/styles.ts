import * as Portal from "@radix-ui/react-portal";
import { styled } from "../../styles";
import { X } from "phosphor-react";

export const CartContainer = styled(Portal.Root, {
  position: "absolute",

  top: 0,
  right: 0,

  backgroundColor: "transparent",

  height: "100vh",
  width: "100vw",

  display: "flex",

  justifyContent: "flex-end",
  alignItems: "center",
});

export const CloseMenuArea = styled("div", {
  width: "100%",
  height: "100vh",

  backgroundColor: "transparent",

  flex: 3,
});

export const Menu = styled("aside", {
  position: "relative",

  height: "100vh",
  minWidth: 480,

  flex: 1,

  backgroundColor: "$gray800",

  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",

  padding: "3rem",
  paddingTop: "4.5rem",

  display: "flex",

  justifyContent: "space-between",
  alignItems: "flex-start",

  flexDirection: "column",

  h1: {
    fontFamily: "Roboto",
    fontSize: "$lg",
    fontWeight: 700,

    color: "$gray100",
  },
});

export const ProductsContainer = styled("section", {
  display: "flex",
  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  marginTop: 32,

  width: "100%",

  gap: "1.5rem",

  "& > div": {
    display: "flex",

    gap: "1.25rem",

    span: {
      lineHeight: 1.6,
    },

    div: {
      display: "flex",

      flexDirection: "column",

      justifyContent: "flex-start",
      alignItems: "flex-start",

      marginBottom: "0.5rem",
    },

    button: {
      backgroundColor: "transparent",

      border: 0,

      fontFamily: "Roboto",
      fontWeight: 700,
      fontSize: "1rem",

      color: "$green500",

      "&:hover": {
        cursor: "pointer",
        color: "$green300",
      },
    },
  },
});

export const ImageContainer = styled("div", {
  display: "flex",

  justifyContent: "center",
  alignItems: "center",

  width: 100,
  height: "fit-content",

  border: 0,
  borderRadius: 8,
  background: "linear-gradient(180deg, #1EA483 0%, #7465D4 100%)",

  img: {
    objectFit: "cover",
  },
});

export const ProductName = styled("span", {
  fontFamily: "Roboto",
  fontSize: "1.125rem",
  fontWeight: 400,

  color: "$gray300",
});

export const Price = styled("span", {
  fontFamily: "Roboto",
  fontSize: "1.125rem",
  fontWeight: 700,

  color: "$gray100",
});

export const CloseButton = styled(X, {
  position: "absolute",

  top: "1.5rem",
  right: "1.5rem",

  color: "$gray400",

  cursor: "pointer",

  "&:hover": {
    opacity: 0.9,
  },
});

export const PurchaseContainer = styled("div", {
  display: "flex",

  flexDirection: "column",

  justifyContent: "flex-start",
  alignItems: "flex-start",

  width: "100%",
});

export const QuantityContainer = styled("div", {
  marginBottom: 7,

  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  color: "$gray300",

  fontSize: "1rem",

  "span:last-child": {
    fontSize: "$md",
  },
});

export const PriceContainer = styled("div", {
  marginBottom: 57,

  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",

  color: "$gray100",

  fontWeight: 700,
  fontSize: "$md",
});

export const BuyButton = styled("button", {
  marginTop: "auto",
  backgroundColor: "$green500",
  border: 0,
  borderRadius: 8,
  color: "$white",
  padding: "1.25rem",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "$md",

  width: "100%",

  "&:disabled": {
    opacity: 0.6,
    cursor: "not-allowed",
  },

  "&:not(:disabled):hover": {
    backgroundColor: "$green300",
  },
});
