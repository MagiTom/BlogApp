import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PostsService } from './posts.service';
import { EditBlogComponent } from './edit-blog/edit-blog.component';
import {MatDividerModule} from '@angular/material/divider';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HighlightSearch } from './home/highlight.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddBlogComponent,
    EditBlogComponent,
    HighlightSearch
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    MatDividerModule,
    Ng2SearchPipeModule
  ],
  exports: [ CommonModule, FormsModule, ReactiveFormsModule, AppComponent],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
