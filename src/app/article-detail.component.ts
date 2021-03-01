import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { article } from "./article";
import { ArticleService } from "./article.service";
import { pluck, switchMap } from "rxjs/operators";
@Component({
  selector: "article-detail",
  template: `
    <ng-container *ngIf="(articles$ | async) as article">
      <h1>{{ article.title }}</h1>
      <p>{{ article.body }}</p>
    </ng-container>
  `,
  styles: [``]
})
export class ArticleDetailComponent implements OnInit {
  articles$: Observable<article>;
  constructor(
    private readonly route: ActivatedRoute,
    private readonly articleService: ArticleService
  ) {}

  ngOnInit() {
    this.articles$ = this.route.params.pipe(
      pluck("slug"),
      switchMap(slug => this.articleService.getArticles(slug))
    );
  }
}
