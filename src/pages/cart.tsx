import type { NextPage } from "next";
import { useSelector } from "react-redux";

import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { RootState } from "@store/index";
import { Products } from "@components/cart";
import { Payment } from "@components/payment";
import { Empty } from "@components/empty";
import Head from "next/head";

const CartPage: NextPage = () => {
  const cartItemsLength = useSelector(
    (state: RootState) => state.cartReducer.items.length
  );

  return (
    <>
      <Head>
        <title>Carrinho ({cartItemsLength}) - Sempre em casa</title>
      </Head>

      <main>
        <Header />

        <section>
          {cartItemsLength > 0 ? (
            <>
              <Products />
              <Payment />
            </>
          ) : (
            <Empty />
          )}
        </section>

        <Footer />
      </main>
    </>
  );
};

export default CartPage;
