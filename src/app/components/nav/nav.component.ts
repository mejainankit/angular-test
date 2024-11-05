import { Component, Input } from '@angular/core';
import { NavItem } from '../../model/navItem-model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss',
})
export class NavComponent {
  @Input() navItems: NavItem[] | undefined;
}
