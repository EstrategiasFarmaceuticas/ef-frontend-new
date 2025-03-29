export class Category {
  constructor(
    public name: string,
    public route: string,
    public imageUrl: string,
    public enableStatus: boolean,
    public creationDate: Date){
  }
}
