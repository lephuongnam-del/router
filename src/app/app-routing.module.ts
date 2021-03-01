import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ArticleDetailComponent } from "./article-detail.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "detail/:slug", component: ArticleDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
