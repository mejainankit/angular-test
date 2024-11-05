import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrl: './item-card.component.scss',
})
export class ItemCardComponent {
  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => console.log(params));
  }
}
