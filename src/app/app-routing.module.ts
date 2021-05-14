import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {
    path: "",
    component: HomeComponent
  },
  {
    path: "add",
    component: AddBlogComponent
  },
  {
    path: "edit/:id", component: EditBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
