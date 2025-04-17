import {CategoryRequest} from '../categories/categoty.request.model';

export class ProductCategoryRequest {
  constructor(
    public category: CategoryRequest,
    public enableStatus: boolean
  ) {
  }
}
