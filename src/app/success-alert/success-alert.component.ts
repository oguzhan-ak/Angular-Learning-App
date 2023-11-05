import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SuccessAlertComponent {

}
