


import { defineQuery } from "next-sanity";

export const allProducts = defineQuery(`
  *[_type == "product"]{
    _id,
    title,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);

export const fourProducts = defineQuery(`
  *[_type == "product"][0..7]{
    _id,
    title,
    name,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);


// Fetching data for shop Page.....

export const shopPage = defineQuery(`
  *[_type == "product"][0..15]{
    _id,
    title,
    name,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);




// Query to fetch a single product by its ID (for dynamic product page)
export const productDetailQuery = defineQuery(`
  *[_type == "product" && _id == $id][0] {
    _id,
    title,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);


export const relatedProducts = defineQuery(`
  *[_type == "product"][14..17]{
    _id,
    title,
    name,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);


export const allProductsQuery = defineQuery(`
  *[_type == "product"]{
    _id,
    title,
    description,
    price,
    isNew,
    dicountPercentage,
    tags,
    "imageUrl": productImage.asset->url
  }
`);

