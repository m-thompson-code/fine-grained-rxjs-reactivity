import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomColor } from '../../random-color';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: '../container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChildComponent {
  randomColor = randomColor;
}
