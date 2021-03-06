import { useSelector } from "react-redux";
import Image from "next/image";
import Link from "next/link";

import { RootState } from "@store/index";

import styles from "./header.module.css";

export const Header = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" passHref>
          <Image
            className={styles.header__logo}
            src="/logo.svg"
            alt="Sempre em casa"
            width={100}
            height={40}
          />
        </Link>

        <nav className={styles.header__links}>
          <Link href="/cart" passHref>
            <button>
              <Image
                className={styles.header__logo}
                src="/shopping-cart.svg"
                alt="Carrinho"
                width={20}
                height={20}
              />

              <p>Carrinho ({cartItems.length})</p>
            </button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
