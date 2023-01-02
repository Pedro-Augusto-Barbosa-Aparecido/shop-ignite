import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    fontWeight: 400,
    color: "$gray300",

    maxWidth: 560,
    textAlign: "center",

    marginTop: "2rem",

    lineHeight: 1.4,
  },

  a: {
    marginTop: "5rem",
    display: "block",

    fontSize: "$lg",
    color: "$green500",

    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ProductsImages = styled("div", {
  marginBottom: "4rem",

  display: "flex",

  justifyContent: "center",
  alignItems: "center",
});

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: 145,
  height: 145,

  "&:not(:first-child)": {
    marginLeft: "-15%",
  },

  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  boxShadow: "0px 0px 60px rgba(0, 0, 0, 0.8)",

  borderRadius: "100%",
  padding: "0.5rem 1rem",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },
});
