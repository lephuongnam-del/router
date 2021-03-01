import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, of } from "rxjs";
import { article } from "./article";
import { ArticleService } from "./article.service";
@Component({
  selector: "app-home",
  template: `
    <p>home work</p>
    <ul>
      <li
        *ngFor="let a of (article$ | async)"
        style="
        border: 1px solid black; padding: 20px; margin-bottom:3px; 
      "
      >
        {{ a.title }}
        <br />
        <a (click)="onReadMore(a.slug)">read more</a>
      </li>
    </ul>
  `,

  styles: [``]
})
export class HomeComponent implements OnInit {
  article$: Observable<article[]>;
  constructor(
    private readonly articleService: ArticleService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.article$ = this.articleService.articles$;
  }
  onReadMore(slug: string) {
    this.router.navigate(["/detail", slug]);
  }
}
