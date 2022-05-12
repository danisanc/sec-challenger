import type { NextPage } from "next";

import { Footer } from "@components/footer";
import { Header } from "@components/header";

const CartPage: NextPage = () => {
  return (
    <main>
      <Header />

      <section>
        <h1>Cart</h1>
      </section>

      <Footer />
    </main>
  );
};

export default CartPage;
