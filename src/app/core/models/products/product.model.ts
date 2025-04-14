import { ProductCategoryRequest } from '../productCategory/product-category.request.model';
import { ProductConsume } from './product-consume.model';

export class Product {
  constructor(
    public name: string,
    public description: string,
    public nutricionalUrl: string,
    public imageUrl: string,
    public showMain: boolean,
    public shortDesc: string,
    public categories: ProductCategoryRequest[],
    public usageSugerences: String[],
    public ingredients: String[],
    public beneficts: String[],
    public consumes: ProductConsume[],
    public creationDate?: Date
  ) {}
}
