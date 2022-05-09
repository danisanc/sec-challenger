export type Status = "ACTIVE" | "DISABLED";

export type Vendor = {
  id: string;
  uuid: string;
  name: string;
  slug: string;
  status: Status;
};

export type Category = {
  id: string;
  uuid: string;
  name: string;
  slug: string;
  status: Status;
};

export type Pack = {
  id: string;
  uuid: string;
  original_price: number;
  current_price: number;
  status: Status;
  unities: number;
};

export type Item = {
  id: string;
  uuid: string;
  type: string;
  name: string;
  description: string;
  beverage_type: string;
  slug: string;
  image: string;
  tags: string;
  search_tags: string;
  hl: number;
  status: Status;
  vendors: {
    vendor: Vendor;
  }[];
  category: Category;
  packs: Pack[];
  stock: string;
};
