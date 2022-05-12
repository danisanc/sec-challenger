import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Products } from "@components/products";
import { Paginate } from "@components/paginate";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page = 1 } = query;

  const response = await fetch(
    `http://${
      process.env.VERCEL_URL || process.env.BASE_URL
    }/api/products?page=${page}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data;
    });

  return {
    props: {
      page,
      perPage: response.perPage,
      total: response.total,
      products: response.data || [],
    },
  };
};

const IndexPage: NextPage = ({
  products,
  page,
  perPage,
  total,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const totalPages = Math.ceil(total / perPage);

  return (
    <>
      <Head>
        <title>Sempre em casa</title>
      </Head>

      <main>
        <Header />

        <section>
          <Products products={products} />
          <Paginate actualPage={page} totalPages={totalPages} />
        </section>

        <Footer />
      </main>
    </>
  );
};

export default IndexPage;
