import { ChangeDetectionStrategy, Component } from '@angular/core';
import { randomColor } from '../../random-color';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: '../container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentComponent {
  randomColor = randomColor;
}
