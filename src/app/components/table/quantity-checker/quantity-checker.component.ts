import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-quantity-checker',
	templateUrl: './quantity-checker.component.html',
	styleUrls: ['./quantity-checker.component.scss']
})
export class QuantityCheckerComponent {

	@Input() quantity: number;
}
