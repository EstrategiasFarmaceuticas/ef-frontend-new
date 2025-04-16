import {BlogComponentInjectorModel} from "../miscellanious/blog/blog-component-injector.model";

export class ArticleShortModel {
  constructor(
    public headerUrl: string = "/dummy/header",
    public headerImage: string = "/article/test/header.jpg",
    public title: string = "Noteworthy technology acquisitions 2021",
    public shortDesc: string = "Here are the biggest enterprise technology acquisitions\nof 2021 so far, in reverse chronological order.",
    public enableStatus: boolean = true,
    public creationDate: Date = new Date()
  ) {
  }
}

export class ArticleModelStringify {
  constructor(
    public headerUrl: string = "",
    public headerImage: string = "",
    public title: string = "",
    public shortDesc: string = "",
    public content: string = "",
    public enableStatus: boolean = true,
    public creationDate: Date = new Date(),
  ) {

  }


}

export function toArticleModel(article: ArticleModelStringify): ArticleModel {
  return new ArticleModel(
      article.headerUrl,
      article.headerImage,
      article.title,
      article.shortDesc,
      JSON.parse(article.content),
      article.enableStatus,
      article.creationDate
  )
}


export class ArticleModel {
  constructor(
      public headerUrl: string = "",
      public headerImage: string = "",
      public title: string = "",
      public shortDesc: string = "",
      public content: BlogComponentInjectorModel[] = [],
      public enableStatus: boolean = true,
      public creationDate: Date = new Date()
  ) {
  }
}
