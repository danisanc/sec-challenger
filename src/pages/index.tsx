import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import { Header } from "@components/header";
import { ProductCard } from "@components/productCard";
import { Footer } from "@components/footer";

import styles from "@assets/styles/home.module.css";

export const getServerSideProps: GetServerSideProps = async () => {
  const products = await fetch("http://localhost:3000/api/products")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return {
    props: {
      products: products.data || [],
    },
  };
};

const IndexPage: NextPage = ({
  products,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <main>
    <Header />

    <section className={styles.productList}>
      {products?.map((product) => (
        <ProductCard key={product.uuid} product={product} />
      ))}
    </section>

    <Footer />
  </main>
);

export default IndexPage;
