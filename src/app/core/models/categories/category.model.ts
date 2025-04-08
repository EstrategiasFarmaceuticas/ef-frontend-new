export class Category {

  name: string;
  route: string;
  imageUrl: string;
  enableStatus: boolean;
  creationDate: Date;

  constructor(name: string, route: string, imageUrl: string, enableStatus: boolean, creationDate: Date
  ) {
    this.name = name;
    this.route = route;
    this.imageUrl = imageUrl;
    this.enableStatus = enableStatus;
    this.creationDate = creationDate;
  }
}

