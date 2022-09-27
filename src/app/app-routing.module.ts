import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { BlogItemComponent } from './blog/components/blog-item/blog-item.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';
import { FormComponent } from './user/components/form/form.component';
import { ProfileComponent } from './user/pages/profile/profile.component';
import { BookService } from './book/services/book.service';
import { BookListComponent } from './book/pages/book-list/book-list.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "book",
    component: BookItemComponent
  },
  {
    path: "blog",
    component: BlogItemComponent
  },
  {
    path: "profile",
    component: ProfileComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
