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
    pathMatch: 'full',
    children: [],
  },
];

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, MatCardModule, RouterModule.forChild([])],
  exports: [RouterModule],
  providers: [
    {
      provide: ROUTES,
      useFactory: () => {
        console.log('routes[0]', routes[0]);
        routes[0].children?.push({
          path: 'item-card/:id',
          component: ItemCardComponent,
        });
        console.log('routes', routes);
        return routes;
      },
      multi: true,
    },
  ],
})
export class HomeModule {}
