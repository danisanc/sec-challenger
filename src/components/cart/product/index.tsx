import { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { formatMoney } from "@utils/format";
import { CartItem } from "@types";
import {
  reduceItemQuantity,
  increaseItemQuantity,
  removeItemToCart,
} from "@store/cart/cartSlice";

import styles from "./product.module.css";

export interface ProductProps {
  product: CartItem;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const [productImage, setProductImage] = useState(product.item.image);

  const price = formatMoney(product.item.packs[product.pack].current_price);
  const total = formatMoney(
    product.item.packs[product.pack].current_price * product.quantity
  );

  return (
    <article className={styles.product}>
      <header className={styles.product__image}>
        <Image
          src={productImage}
          alt={product.item.name}
          width={150}
          height={150}
          onError={() => {
            setProductImage("/no-image.png");
          }}
        />
      </header>

      <main>
        <div className={styles.product__name}>
          <b>{product.item.vendors[0].vendor.name}</b>
          <p title={product.item.name}>{product.item.name}</p>
          <p title={product.item.name}>
            Pack com <b>{product.item.packs[product.pack].unities}</b> unidades
          </p>
        </div>

        <div className={styles.product__quantity}>
          <button
            onClick={() => dispatch(reduceItemQuantity({ item: product }))}
          >
            -
          </button>

          <input
            disabled
            value={`${product.quantity} pack${product.quantity > 1 ? "s" : ""}`}
          />

          <button
            onClick={() => dispatch(increaseItemQuantity({ item: product }))}
          >
            +
          </button>
        </div>

        <div className={styles.product_price}>
          <p data-type="new-price">
            Cada pack custa: <b>{price}</b>
          </p>

          <p data-type="total-price">
            Total: <b>{total}</b>
          </p>
        </div>
      </main>

      <footer>
        <button
          className={styles.product__remove}
          onClick={() => dispatch(removeItemToCart({ item: product }))}
        >
          Remover
        </button>
      </footer>
    </article>
  );
};
