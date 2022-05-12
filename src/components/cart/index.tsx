import { CartItem } from "@types";
import { Product } from "@components/cart/product";

import styles from "./products.module.css";

export interface ProductsProps {
  products: CartItem[];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <Product key={product.item.id} product={product} />
      ))}
    </div>
  );
};
