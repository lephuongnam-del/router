import { Injectable } from "@angular/core";
import { article } from "./article";
import { of, Observable } from "rxjs";
import { delay, shareReplay, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ArticleService {
  constructor() {}

  get articles$() {
    return of<article[]>([
      { title: "title 1", body: "this is content of title 1", slug: "title-1" },
      { title: "title 2", body: "this is content of title 2", slug: "title-2" }
    ]).pipe(shareReplay());
  }

  getArticles(slug: string): Observable<article> {
    return this.articles$.pipe(
      map(articles => articles.find(ar => ar.slug === slug))
    );
  }
}
