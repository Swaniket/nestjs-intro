/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Body, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productService: ProductsService) {}

  // @URL: /products
  // @METHOD: POST
  @Post()
  addProduct(
    @Body() completeBody: { title: string; desc: string; price: number },
    @Body('title') prodTitle: string,
    @Body('desc') prodDesc: string,
    @Body('price') prodPrice: number,
  ): any {
    console.log('completeBody', completeBody);

    const generatedId = this.productService.insertProduct(
      prodTitle,
      prodDesc,
      prodPrice,
    );
    return { id: generatedId };
  }

  // @URL: /products
  // @METHOD: GET
  @Get()
  getAllProducts() {
    return this.productService.getProducts();
  }

  // @URL: /products/:id
  // @METHOD: GET
  @Get(':id')
  getAllProduct(@Param('id') prodId: string) {
    return this.productService.getSingleProduct(prodId);
  }
}
