import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";

import { Header } from "@components/header";
import { Footer } from "@components/footer";
import { Products } from "@components/products";
import { Paginate } from "@components/paginate";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { page = 1 } = query;

  const response = await fetch(
    `${process.env.base_api_url}/products?page=${page}`
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
    <main>
      <Header />

      <section>
        <Products products={products} />
        <Paginate actualPage={page} totalPages={totalPages} />
      </section>

      <Footer />
    </main>
  );
};

export default IndexPage;
