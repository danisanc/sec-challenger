import type { NextPage } from "next";
import { useEffect, useState } from "react";

const IndexPage: NextPage = () => {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch("api/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  console.log(data.data);

  return (
    <>
      <header>
        <h1>Sempre em casa</h1>

        <nav>
          <ul>
            <li>Carrinho</li>
          </ul>
        </nav>
      </header>

      <main>
        {data?.data?.map((product) => {
          console.log(product.vendors[0].vendor.name);

          return (
            <article key={product.uuid}>
              <img src={product.image} alt={product.name} />

              <div>
                <p>{product.vendors[0].vendor.name}</p>
                <p>{product.name}</p>
              </div>

              <div>
                <p>Escolha o pack</p>

                {product?.packs?.map((pack) => {
                  return (
                    <li key={pack.id}>
                      <span>{pack.unities}</span> unid.
                    </li>
                  );
                })}
                <ul></ul>
              </div>

              <div>
                <p>
                  desc: <span>22%</span>
                </p>

                <p>
                  de: <span>R$ 68,70</span>
                </p>

                <p>
                  por: <span>R$ 53,70</span>
                </p>
              </div>

              <div>
                <p>a unidade sai por</p>
                <p>R$ 1,79</p>
              </div>

              <button>Adicionar ao carrinho</button>
            </article>
          );
        })}
      </main>
    </>
  );
};

export default IndexPage;
