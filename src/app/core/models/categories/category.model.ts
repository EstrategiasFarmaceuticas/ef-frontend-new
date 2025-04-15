export interface Category {
  name: string;
  route: string;
  imageUrl: string;
  enableStatus: boolean;
  creationDate: Date;
}

export interface CategoryResponse {
  content: Category[];
  page: PageData;
}

export interface PageData {
  size: number;
  number: number;
  totalElements: number;
  totalPages: number;
}

