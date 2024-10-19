import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const countProducts = async () => {
    const products = await fs.readFile(PATH_DB, 'utf-8');
    const productsData = JSON.parse(products);
    return productsData.length;
};
console.log(await countProducts());
