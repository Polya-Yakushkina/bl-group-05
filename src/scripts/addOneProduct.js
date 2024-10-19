import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProducts.js';

const addOneProduct = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  // console.log("This is ...", typeof products);
  const productData = products ? JSON.parse(products) : [];
  // console.log("This is ...", productData);
  productData.push(createFakeProduct());

  fs.writeFile(PATH_DB, JSON.stringify(productData, null, 2), 'utf-8');
};
addOneProduct();
