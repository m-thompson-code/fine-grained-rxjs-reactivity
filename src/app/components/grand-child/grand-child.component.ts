import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { randomColor } from '../../random-color';
import { DataService } from '../../services/data.service';
import { MyAsyncPipe } from '../../pipes/my-async.pipe';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [AsyncPipe, MyAsyncPipe],
  templateUrl: './grand-child.component.html',
  styleUrl: '../container.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GrandChildComponent {
  dataService = inject(DataService);
  randomColor = randomColor;
}
