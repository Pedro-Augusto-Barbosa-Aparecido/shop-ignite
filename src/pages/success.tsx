import Link from "next/link";
import {
  SuccessContainer,
  ImageContainer,
  ProductsImages,
} from "../styles/pages/success";
import { GetServerSideProps } from "next";
import { stripe } from "../lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string;
  products: {
    name: string;
    imageUrl: string;
    id: string;
  }[];
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ProductsImages>
          {products.map((product, index) => (
            <ImageContainer key={product.id} style={{ zIndex: index }}>
              <Image src={product.imageUrl} alt="" width={120} height={110} />
            </ImageContainer>
          ))}
        </ProductsImages>
        <h1>Compra efetuada!</h1>

        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de {products.length}{" "}
          camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ["line_items", "line_items.data.price.product"],
  });

  const customerName = session.customer_details.name;
  const products = session.line_items.data.map(
    (item) => item.price.product
  ) as Stripe.Product[];

  return {
    props: {
      customerName,
      products: products.map((product) => {
        return {
          name: product.name,
          imageUrl: product.images[0],
          id: product.id,
        };
      }),
    },
  };
};
