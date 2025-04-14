import {Category} from '../categories/category.model';

export class ProductCategory {
  constructor(
    public category: Category,
    public enableStatus: boolean,
    public creationDate: Date
  ) {}
}
