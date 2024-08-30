import { Component, Input } from '@angular/core';
import { Details } from '../models/details';

@Component({
  selector: 'app-show-form',
  templateUrl: './show-form.component.html',
  styleUrl: './show-form.component.css'
})
export class ShowFormComponent {
  @Input() accounts:Array<Details> = [];
}
