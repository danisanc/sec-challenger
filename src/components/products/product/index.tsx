import { useState } from "react";
import Image from "next/image";

import { Item } from "@types";
import { formatMoney, formatPercentage } from "@utils/format";
import { getPercentage } from "@utils/percentage";

import styles from "./product.module.css";

export interface ProductProps {
  product: Item;
}

export const Product = ({ product }: ProductProps) => {
  const [productImage, setProductImage] = useState(product.image);
  const [productSelectedPack, setProductSelectedPack] = useState(1);

  const oldPrice = formatMoney(
    product.packs[productSelectedPack].original_price
  );

  const newPrice = formatMoney(
    product.packs[productSelectedPack].current_price
  );

  const discountPercentage = getPercentage(
    product.packs[productSelectedPack].original_price,
    product.packs[productSelectedPack].current_price
  );

  const discount = formatPercentage(discountPercentage);

  const unitPrice = formatMoney(
    product.packs[productSelectedPack].current_price /
      product.packs[productSelectedPack].unities
  );

  return (
    <article className={styles.product}>
      <header className={styles.product__image}>
        <Image
          src={productImage}
          alt={product.name}
          width={150}
          height={150}
          onError={() => {
            setProductImage("/no-image.png");
          }}
        />

        {discountPercentage > 15 && (
          <p className={styles.product__discount_tag}>{discount}</p>
        )}
      </header>

      <main>
        <div className={styles.product__name}>
          <b>{product.vendors[0].vendor.name}</b>
          <p title={product.name}>{product.name}</p>
        </div>

        <div className={styles.product__packs}>
          <p>Escolha o pack</p>

          <ul>
            {product?.packs?.map((pack, index) => {
              return (
                <li
                  key={pack.id}
                  data-selected={index === productSelectedPack}
                  onClick={() => setProductSelectedPack(index)}
                >
                  <b>{pack.unities}</b>
                  <p>unidades</p>
                </li>
              );
            })}
          </ul>
        </div>

        <div className={styles.product__packs_price}>
          <p data-type="old-price">
            De: <b>{oldPrice}</b>
          </p>

          <p data-type="new-price">
            Por: <b>{newPrice}</b>
          </p>

          <p data-type="discount">
            Desconto de: <b>{discount}</b>
          </p>

          <p>
            A unidade sai por: <b>{unitPrice}</b>
          </p>
        </div>
      </main>

      <footer>
        <button className={styles.product__add_to_cart}>
          Adicionar ao carrinho
        </button>
      </footer>
    </article>
  );
};
