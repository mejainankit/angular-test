import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, ROUTES, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component';
import { ItemCardComponent } from './components/item-card/item-card.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [],
  },
];

@NgModule({
  declarations: [HomeComponent, ItemCardComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        routes[0].children?.push({
          path: 'item-card/:id',
          component: ItemCardComponent,
        });
        return routes;
      },
      multi: true,
    },
  ],
})
export class HomeModule {}
