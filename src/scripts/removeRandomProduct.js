import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const removeRandomProduct = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const productData = JSON.parse(products);

  if (productData.length === 0) {
    console.log('Продуктів немає');
    return;
  }

  const randomIndex = Math.floor(Math.random() * productData.length);

  const removeProduct = productData.splice(randomIndex, 1);

  fs.writeFile(PATH_DB, JSON.stringify(productData, null, 2), 'utf-8');

  return removeProduct;
};

console.log(await removeRandomProduct());
