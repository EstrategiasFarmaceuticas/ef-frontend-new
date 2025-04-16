export class Page<T> {
  constructor(
    public content: T[],
    public page: PageData,
  ) {
  }
}

class PageData {
  constructor(
    public size: number,
    public number: number,
    public totalElements: number,
    public totalPages: number
  ) {
  }
}
