import type { NextPage } from "next";
import { useSelector } from "react-redux";

import { Footer } from "@components/footer";
import { Header } from "@components/header";
import { RootState } from "@store/index";
import { Products } from "@components/cart";
import { Payment } from "@components/payment";
import { Empty } from "@components/empty";

const CartPage: NextPage = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  return (
    <main>
      <Header />

      <section>
        {cartItems.length > 0 ? (
          <>
            <Products products={cartItems} />
            <Payment />
          </>
        ) : (
          <Empty />
        )}
      </section>

      <Footer />
    </main>
  );
};

export default CartPage;
