import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ArticleModel, ArticleModelStringify, ArticleShortModel} from '../../models/article/article.model';
import {BlogComponentInjectorModel} from '../../models/miscellanious/blog/blog-component-injector.model';
import {GeneralVariables} from '../../generalVariables';
import {Page} from '../../models/page';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(
    private http: HttpClient,
  ) { }

  private general = new GeneralVariables()
  private url = this.general.url.concat("/article")

  searchArticles(
    search: string = "",
    status: boolean = true,
    both: boolean = false,
    index: number = 0,
    size: number = 5
  ) {
    const params = new HttpParams()
      .set('search', search)
      .set('status', status.toString())
      .set('bothStatus', both.toString())
      .set('index', index.toString())
      .set('size', size.toString());

    return this.http.get<Page<ArticleShortModel>>(this.url.concat("/search"), { params });
  }

  getArticle(headerUrl: string){
    const params = new HttpParams()
      .set('headerUrl', headerUrl)

    return this.http.get<ArticleModelStringify>(this.url.concat("/get"), { params });
  }
}
