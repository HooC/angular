import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { ProductComponent } from './product/product.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { TimerComponent } from './timer/timer.component';

const paths = [
  {path: '', component: HomeComponent},
  {path: 'product', component: ProductComponent},
  {path: 'catalog', component: CatalogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    ProductComponent,
    CatalogComponent,
    HomeComponent,
    CounterComponent,
    TimerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(paths)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
