import Link from "next/link";

import styles from "./paginate.module.css";

export interface PaginateProps {
  actualPage: number;
  totalPages: number;
}

export const Paginate = ({ actualPage, totalPages }: PaginateProps) => {
  return (
    <nav>
      <ul className={styles.paginate}>
        {[...Array(totalPages)].map((_, i) => {
          let page = i + 1;

          return (
            <Link
              key={page}
              href={{
                pathname: "/",
                query: { page },
              }}
              passHref
            >
              <li data-current={actualPage == page}>{page}</li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};
