/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

import { IProduct } from './product.mode';

@Injectable()
export class ProductsService {
  products: IProduct[] = [];

  insertProduct(title: string, desc: string, price: number) {
    const prodId = Math.random().toString();

    const newProduct = new IProduct(prodId, title, desc, price);
    this.products.push(newProduct);

    return prodId;
  }

  getProducts() {
    return [...this.products];
  }

  getSingleProduct(productId: string) {
    const product = this.products.find((product) => product.id === productId);

    if (!product) {
      throw new NotFoundException('Could not find product');
    }

    return { ...product };
  }
}
