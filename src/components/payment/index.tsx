import Link from "next/link";
import { useSelector } from "react-redux";

import { RootState } from "@store/index";
import { formatMoney } from "@utils/format";

import styles from "./payment.module.css";

export const Payment = () => {
  const cartItems = useSelector((state: RootState) => state.cartReducer.items);

  const totalValue = cartItems.reduce(
    (previousValue, currentItem) =>
      previousValue +
      currentItem.item.packs[currentItem.pack].current_price *
        currentItem.quantity,
    0
  );

  return (
    <div className={styles.container}>
      <p className={styles.total_price}>
        Total: <b>{formatMoney(totalValue)}</b>
      </p>

      <Link
        href="https://i.giphy.com/media/3oz8xDLuiN1GcDA3xC/giphy.gif"
        passHref
      >
        <button className={styles.finish_button}>Finalizar compra</button>
      </Link>
    </div>
  );
};
