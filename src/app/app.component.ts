import { Component } from '@angular/core';
import { IProduct } from './interfaces/IProduct';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {

	products: IProduct[] = [{
		name: 'iPhone 7 32gb',
		category: 'Smartphone',
		price: 299.99,
		quantity: 4
	},
	{
		name: 'AirPods',
		category: 'Headphones',
		price: 159.99,
		quantity: 23
	},
	{
		name: 'EarPods with Lightning Connector',
		category: 'Headphones',
		price: 26.99,
		quantity: 2
	},
	{
		name: 'iPhone 8 64gb',
		category: 'Smartphone',
		price: 599.99,
		quantity: 12
	}];
}
