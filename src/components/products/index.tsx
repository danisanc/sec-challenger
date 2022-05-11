import { Item } from "@types";

import { Product } from "@components/products/product";

import styles from "./products.module.css";

export interface ProductsProps {
  products: Item[];
}

export const Products = ({ products }: ProductsProps) => {
  return (
    <div className={styles.products}>
      {products?.map((product) => (
        <Product key={product.uuid} product={product} />
      ))}
    </div>
  );
};
