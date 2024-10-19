import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProducts.js';

const generateProducts = async (number) => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const productsParse = products ? JSON.parse(products) : [];
  const newProducts = Array(number).fill(0).map(createFakeProduct);
  const result = [...productsParse, ...newProducts];
  await fs.writeFile(PATH_DB, JSON.stringify(result, null, 2), 'utf-8');
};

generateProducts(4);
