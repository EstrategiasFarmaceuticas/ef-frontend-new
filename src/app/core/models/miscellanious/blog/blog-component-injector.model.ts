import {BlogComponentInjectorType} from './blog-component-injector-type';

export class BlogComponentInjectorModel {
  constructor(
    public component: BlogComponentInjectorType,
    public data: string,
    public externalImage: boolean = false
  ) {
  }
}
