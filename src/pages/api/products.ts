import type { NextApiHandler } from "next";

import { paginate } from "@utils/paginate";

const Handler: NextApiHandler = (req, res) => {
  const { page = 1, perPage = 10 } = req.query;
  const allProductsJson = require("@data/products");

  const response = {
    page,
    perPage,
    total: allProductsJson.items.length,
    data: paginate(allProductsJson.items, page, perPage),
  };

  return res.status(200).json(response);
};

export default Handler;
