import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts.js';

const addOneProduct = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const productData = JSON.parse(products);
  productData.push(createFakeProduct());

  //   console.log(productData);
  fs.writeFile(PATH_DB, JSON.stringify(productData, null, 2), 'utf-8');
};
addOneProduct();
