import { ProductConsume } from './product-consume.model';
import {ProductCategory} from '@model/productCategory/product-category.model';

export class Product {
  constructor(
    public name: string,
    public description: string,
    public nutritionalUrl: string,
    public imageUrl: string,
    public showMain: boolean,
    public shortDesc: string,
    public enableStatus: boolean,
    public categories: ProductCategory[],
    public usageSugerences: String[],
    public ingredients: String[],
    public beneficts: String[],
    public consumes: ProductConsume[],
  ) {}
}
