import { useState } from "react";
import Image from "next/image";

import { Item } from "@types";
import { formatMoney, formatPercentage } from "@utils/format";

import styles from "./product.module.css";

export interface ProductProps {
  product: Item;
}

export const Product = ({ product }: ProductProps) => {
  const [productImage, setProductImage] = useState(product.image);
  const [productSelectedPack, setProductSelectedPack] = useState(1);

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
            De:
            <b>
              {formatMoney(product.packs[productSelectedPack].original_price)}
            </b>
          </p>

          <p data-type="new-price">
            Por:
            <b>
              {formatMoney(product.packs[productSelectedPack].current_price)}
            </b>
          </p>

          <p data-type="discount">
            Desconto de:
            <b>
              {formatPercentage(
                product.packs[productSelectedPack].original_price,
                product.packs[productSelectedPack].current_price
              )}
            </b>
          </p>

          <p>
            A unidade sai por:
            <b>
              {formatMoney(
                product.packs[productSelectedPack].current_price /
                  product.packs[productSelectedPack].unities
              )}
            </b>
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
