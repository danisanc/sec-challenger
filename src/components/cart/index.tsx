import { CartItem } from "@types";
import { Product } from "@components/cart/product";
import { useSelector } from "react-redux";

import { RootState } from "@store/index";

import styles from "./products.module.css";

export const Products = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  return (
    <div className={styles.products}>
      {cartItems?.map((product) => (
        <Product key={product.item.id} product={product} />
      ))}
    </div>
  );
};
